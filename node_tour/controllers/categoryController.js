const Category = require('../models/Category');
const jwt = require('jsonwebtoken');


exports.getAllCategory = async (req, res) => {
    const category = await Category.find();
    res.json(category);
}

exports.addCategory = async (req, res) => {
    const { name, img } = req.body;
    const category = new Category({ name, img });
    await category.save();
    res.json({ message: 'Thêm danh mục thành công', category });
};
