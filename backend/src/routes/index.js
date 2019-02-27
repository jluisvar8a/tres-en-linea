const express = require('express')
const router = express.Router()
const Play = require('../models/play')

router.get('/',(req, res) => {
   res.render('index.html')
})

module.exports = router