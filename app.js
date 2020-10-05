require('dotenv').config()

const express = require('express')
const app = express()

require('./database/mongoose')
const orderRouter = require('./routes/order')

const path = require("path")

const port = process.env.PORT

app.use(express.json())
app.use(orderRouter)

app.listen(port, () => { console.log( `Server Is Up ON ${port}` )})
 
