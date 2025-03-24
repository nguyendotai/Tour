const express = require('express');
const { getHotTours, getSaleTours, searchTours, getTourDetails} = require('../controllers/tourController');

const router = express.Router();
router.get('/hot', getHotTours);
router.get('/sale', getSaleTours);
router.get('/search', searchTours);
router.get('/:id', getTourDetails);

module.exports = router;
