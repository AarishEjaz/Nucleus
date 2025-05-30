const express = require('express')

const { loginController,registerController } = require('../controllers/authController')

const router = express.Router()

router.post('/register',registerController)

router.post('/login',loginController)