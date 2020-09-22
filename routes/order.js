const express = require('express')
const router = new express.Router()
const Order = require('../models/order')
const { Router } = require('express')
const { update } = require('../models/order')

router.post('/order', async (req, res) => {
    const order = await new Order(req.body)
    try{
        await order.save()
        res.status(201).send(order)        
    }
    catch(e){
        res.status(400).send(e)
        console.log(e)
    }
})

router.get('/orders', async (req, res) => {
    try{
    const orders = await Order.find()
    console.log("GET ORDERS")   
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