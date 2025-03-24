const Location = require('../models/Location');
const jwt = require('jsonwebtoken');

exports.addLocation = async (req, res) => {
    const { name, description, img, categoryId } = req.body;
    const location = new Location({ name, description, img, categoryId });
    await location.save();
    res.json({ message: 'Thêm danh điểm đến công', location });
};
