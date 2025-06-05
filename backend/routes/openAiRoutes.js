const express = require('express')

const router = express.Router()

const {summaryController} = rquier('../controllers/openAiController')

router.post("/summary", summaryController)

module.exports = router