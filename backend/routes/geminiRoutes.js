const express = require('express')

const router = express.Router()

const {summaryController} = require('../controllers/openAiController')

router.post("/summary", summaryController)

module.exports = router