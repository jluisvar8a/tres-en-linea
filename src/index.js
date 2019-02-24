const express = require('express')
const path = require('path')

const app = express()

// Setting
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))

// Routes
app.use(require('./routes/index'))



// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})