const express = require('express');
const { addItinerary } = require('../controllers/itineraryController');

const router = express.Router();
router.post('/addItinerary', addItinerary);

module.exports = router;