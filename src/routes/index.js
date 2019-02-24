const express = require('express')
const router = express.Router()

router.get('/',(req, res) => {
    //res.send('hola')
   //res.sendFile('/apps/tres-en-linea/src/views/index.html')
   res.render('index.html')
   res.render('index.css')
})

module.exports = router