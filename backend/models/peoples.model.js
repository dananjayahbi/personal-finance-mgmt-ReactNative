const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peoplesSchema = new Schema({
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

const Peoples = mongoose.model("Peoples", peoplesSchema);

module.exports = Peoples;