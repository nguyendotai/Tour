const Itinerary = require('../models/Itinerary');
const jwt = require('jsonwebtoken');

exports.addItinerary = async (req, res) => {
    const { tourId, day, title, detail, img } = req.body;
    const itinerary = new Itinerary({ tourId, day, title, detail, img });
    await itinerary.save();
    res.json({ message: 'Thêm hành trình thành công', itinerary });
};
