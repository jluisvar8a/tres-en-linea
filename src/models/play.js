const mongoose = require('mongoose')
const { schema } = mongoose

const PlaySchema = new schema ({
    pause: { type: String, require: true},
    play: ['0','0','0','0','0','0','0','0','0']
})

module.exports = mongoose.model('Play', PlaySchema)