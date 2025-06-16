const express = require('express')

const router = express.Router()

const {summaryController, javascriptController, brotherController, docsController, paraController} = require('../controllers/geminiController')

router.post("/summary", summaryController)
router.post("/vibe-code", javascriptController)
router.post('/brother', brotherController)
router.post('/docs',docsController )
router.post('/paragraph', paraController)

module.exports = router