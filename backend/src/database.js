const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tres-en-linea', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))

const db = mongoose.connection