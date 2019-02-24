const mongoose = require('mongoose')
const { schema } = mongoose

const PlaySchema = new schema ({
    pause: { type: String, require: true}
})