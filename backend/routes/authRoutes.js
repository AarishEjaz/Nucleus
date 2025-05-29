const express = require('express')
const { register } = require('module')
const { loginController } = require('../controllers/authController')

const router = express.Router()

router.post('/register',register)

router.post('/login',loginController)