const mongoose = require("mongoose");

const activeBills = new mongoose.Schema({
    bookingDate: {
        type: String,
        required: true
    },
    deliveryDate: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    mail: String,
    address: String,
    comments: String,
    // productName: {
    //     type: [String],
    //     required: true
    // }
});

const ActiveBills = mongoose.model("ActiveBills", activeBills);
module.exports = ActiveBills;