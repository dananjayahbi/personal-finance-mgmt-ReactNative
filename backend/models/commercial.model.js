const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commercialSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
    description: {
        type: String,
    },
});

const Commercial = mongoose.model('Commercial', commercialSchema);

module.exports = Commercial;