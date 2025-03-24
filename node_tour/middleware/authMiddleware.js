const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyAdmin = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    if (!user || user.role !== 'admin') {
      return res.status(403).json({ message: 'Bạn không có quyền truy cập' });
    }
    
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Xác thực thất bại' });
  }
};