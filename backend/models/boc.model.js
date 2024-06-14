const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bocSchema = new Schema({
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

const Boc = mongoose.model("Boc", bocSchema);

module.exports = Boc;
