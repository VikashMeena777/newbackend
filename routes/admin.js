const express = require('express');
const User = require('../models/User');
const Order = require('../models/Order');
const { protect, adminOnly } = require('../middlewares/auth');
const router = express.Router();


router.get('/users', protect, adminOnly, async (req, res) => res.json(await User.find().select('-password')));
router.get('/analytics', protect, adminOnly, async (req, res) => {
    const users = await User.countDocuments();
    const orders = await Order.countDocuments({ paymentStatus: 'paid' });
    // simplistic revenue (not transactional)
    res.json({ totalUsers: users, totalPaidOrders: orders });
});


module.exports = router;