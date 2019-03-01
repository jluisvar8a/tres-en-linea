const mongoose = require('mongoose')
const { Schema } = mongoose;

const GameSchema = new Schema ({
    userOne: { type: String, require: true},
    userTwo: { type: String, require: true},
    board: { type: Array, require: true},
    winner: { type: String, require: false}
})

module.exports = mongoose.model('Game', GameSchema)