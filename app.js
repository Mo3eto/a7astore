require('dotenv').config()
require('./database/mongoose')
const phoneNumberLib = require('libphonenumber-js')
const express = require('express')
const app = express()
const path = require("path")
const port = process.env.PORT
const orderRouter = require('./routes/order')

app.use(express.json())
app.use(orderRouter)

//import { findPhoneNumbersInText } from 'libphonenumber-js'
/*
console.log(phoneNumber.findPhoneNumbersInText(` For tech support call +2 01153606206 `, `EG`))
if(phoneNumber.findPhoneNumbersInText(` For tech support call +2 011536062066 `,`EG`))
{
    console.log("Valid")
}
else console.log('inValid')
*/
const phone = phoneNumberLib.parsePhoneNumberFromString('+201153606206')

console.log(phone.formatInternational())

console.log(phone.formatNational())

console.log(phone.isValid())






app.listen(port, () => { console.log( `Server Is Up ON ${port}` )})



