const mongoose = require('mongoose')
const phoneNumber = require('libphonenumber-js')
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})  