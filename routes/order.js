const express = require('express')
const router = new express.Router()
const Order = require('../models/order')
const phoneNumberLib = require('libphonenumber-js')

const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

router.post('/phone-verify', async (req, res) => {
    try{
        const data = await client.verify.services(process.env.VERIFICATION_SID).verifications
        .create({to: req.body.phoneNumber, channel: req.body.channel})
        res.status(200).send(data)
    }
    catch(e){
            res.status(400).send(e)
        }
    })

    router.post('/code-verify', async (req, res) => {
        try{
            const data = await client.verify.services(process.env.VERIFICATION_SID).verificationChecks
            .create({to: req.body.phoneNumber, code: req.body.code})
            res.status(200).send(data)
        }
        catch(e){
                res.status(400).send(e)
            }
        })
    
        router.get('/msg', async (req, res) => {
            const data = await client.messages.create({
                body: '2BO-ELSO7AB EL3ALAMY IS THE KING',
                from: '+19287563640',
                to: '+201153606206'
            })
            res.status(200).send(data.sid)
        })

router.get('/', (req, res) => {
        res.send('A7A STORE')
})

router.post('/order', async (req, res) => {
    const order = await new Order(req.body)    
    try{
        await order.save()
        res.status(201).send(order)        
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/orders', async (req, res) => {
    try{
    const orders = await Order.find()
    res.status(200).send(orders)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/orders/:id', async (req, res) => {
    const id = req.params.id
    try{
        const order = await Order.findById(id)
        res.status(200).send(order)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.patch('/orders/:id', async (req, res) => {
    const id = req.params.id
    const updates = Object.keys(req.body)
    try{
    const order = await Order.findById(id)
    updates.forEach( (update) => order[update] = req.body[update] )
    await order.save()
    res.status(201).send(order)        
    } 
    catch(e){
        res.status(400).send(e)
    }
})

router.delete('/orders/:id', async (req, res) => {
    const id = req.params.id
    try{
        const order = await Order.findByIdAndDelete(id)
        res.status(200).send(order)
    }
    catch(e){
        res.status(404).send(e)
    }   
})

module.exports = router