const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tours: [{ tourId: String, quantity: Number }],
    totalAmount: Number,
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
