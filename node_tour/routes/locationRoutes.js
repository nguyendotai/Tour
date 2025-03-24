const express = require('express');
const { addLocation } = require('../controllers/locationController');

const router = express.Router();
router.post('/addLocation', addLocation);

module.exports = router;