const express = require('express')
const path = require('path')

const app = express()

// Setting
app.set('port', process.env.PORT || 3000)
//app.use(express.static('views'))
//app.engine('html');

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))
//app.set('views', path.join(__dirname, 'views'))
//app.use('views', express.static(__dirname, 'views'))
//app.set('view engine', 'html')

// Routes
app.use(require('./routes/index'))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})