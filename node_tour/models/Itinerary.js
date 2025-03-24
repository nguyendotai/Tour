const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    day: Number,
    title: String,
    detail: String,
    img: [String]
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', ItinerarySchema);