const express = require('express')
const morgan =  require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require("colors")
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()

connectDB()


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on PORT ${process.env.PORT}`)
})