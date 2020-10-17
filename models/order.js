const mongoose = require('mongoose')
const phoneNumberLib = require('libphonenumber-js')
 
const orderSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true,
        validate: function validate (value){
            const regex = new RegExp(/^\+201(0|1|2|5)\d{8}$/)
            if(!regex.test(value)){throw new Error('Invalid Phone Number')}
        }
    },    
    address:{
        type:String,
        required: true
    },
    printedFName:{
        type: String,
        required: true
    },
    printedBName:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    checked:{
        type: Boolean,
        default: false
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order