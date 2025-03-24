const Order = require('../models/Order');

exports.addToCart = async (req, res) => {
    const { userId, tourId, quantity } = req.body;
    let order = await Order.findOne({ userId });
    if (!order) {
        order = new Order({ userId, tours: [] });
    }
    order.tours.push({ tourId, quantity });
    await order.save();
    res.json({ message: 'Đã thêm vào giỏ hàng' });
};

exports.getCart = async (req, res) => {
    const order = await Order.findOne({ userId: req.params.userId }).populate('tours.tourId');
    res.json(order);
};