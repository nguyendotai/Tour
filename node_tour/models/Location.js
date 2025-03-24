const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    img: String
}, { timestamps: true });

module.exports = mongoose.model('Location', LocationSchema);    
