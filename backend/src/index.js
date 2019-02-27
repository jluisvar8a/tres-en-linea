const express = require('express')
const path = require('path')

const app = express()

// Setting
app.set('port', process.env.PORT || 3000)
//app.use(express.static(__dirname + '/views'))

// Static files
app.use(express.static(path.join(__dirname, 'views')))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(require('./routes/index'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})