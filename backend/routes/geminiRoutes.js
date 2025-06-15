const express = require('express')

const router = express.Router()

const {summaryController, javascriptController, brotherController} = require('../controllers/geminiController')

router.post("/summary", summaryController)
router.post("/vibe-code", javascriptController)
router.post('/brother', brotherController)

module.exports = router