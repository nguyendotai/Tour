const Tour = require('../models/Tour');

exports.getHotTours = async (req, res) => {
    const tours = await Tour.find({isHot: true});
    res.json(tours);
}

exports.getSaleTours = async (req, res) => {
    const tours = await Tour.find({isSale: true});
    res.json(tours);
}

exports.searchTours = async (req, res) => {
    const {keyword} = req.query;
    const tours = await Tour.find({title: { $regex: keyword, $options: 'i' }})
    res.json(tours);
}

exports.getTourDetails = async (req, res) => {
    const tour = await Tour.findById(req.params.id);
    res.json(tour);
}


