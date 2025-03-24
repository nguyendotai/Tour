const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema(
  {
    title: String,
    price: Number,
    description: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    isHot: Boolean,
    isSale: Boolean,
    itinerary: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
    image_cover: String,
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tour', TourSchema);
