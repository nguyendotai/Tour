const express = require('express');
const { addCategory, getAllCategory } = require('../controllers/categoryController');

const router = express.Router();
router.get('/', getAllCategory);
router.post('/addCategory', addCategory);

module.exports = router;