const express = require('express')
const morgan =  require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require("colors")
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const errorHandler = require('./middlewares/errorMiddleware')
const openAiRoutes = require('./routes/openAiRoutes')
dotenv.config()

connectDB()


const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))
app.use(errorHandler)
const PORT = process.env.PORT || 8080

//API Routes
app.use("api/v1/auth",authRoutes)
app.use('/api/v1/openai', openAiRoutes)


app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on PORT ${process.env.PORT}`)
})