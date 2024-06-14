const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cashSchema = new Schema({
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

const Cash = mongoose.model("Cash", cashSchema);

module.exports = Cash;