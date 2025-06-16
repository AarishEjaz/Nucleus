const express = require('express')
const morgan =  require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const colors = require("colors")
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const errorHandler = require('./middelwares/errorMiddleware')
const geminiRoutes = require('./routes/geminiRoutes')
dotenv.config()


connectDB()


const app = express()
app.use(express.json());


app.use(
  cors({
    origin: "https://nucleus-8n31.onrender.com",
  })
);
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan("dev"))
const PORT = process.env.PORT || 8080

//API Routes
app.use("/api/v1/auth",authRoutes)
app.use('/api/v1/gemini', geminiRoutes)
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server running in ${process.env.DEV_MODE} on PORT ${process.env.PORT}`)
})