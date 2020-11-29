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

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
    );
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,PUT,OPTIONS");
    next();
})
 
