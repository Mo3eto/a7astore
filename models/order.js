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
        validate: function validate(value){
        const phone = phoneNumberLib.parsePhoneNumberFromString(value)
        console.log(value)
      //  console.log(phone.formatInternational())
    }
      /*  validate: function validate(value){
            const phone = phoneNumberLib.parsePhoneNumberFromString(value)
            if(!phone.isValid()){
                    throw new Error('Please, Enter a Valid Phone Number')
            }
           // console.log(phone.formatInternational())

            
        } */
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
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order