const express = require('express');
const Product = require('../models/Product');
const { protect, adminOnly } = require('../middlewares/auth');
const router = express.Router();


// list
router.get('/', async (req, res) => {
    const items = await Product.find();
    res.json(items);
});
// create (admin)
router.post('/', protect, adminOnly, async (req, res) => {
    const p = await Product.create(req.body);
    res.status(201).json(p);
});
// update
router.put('/:id', protect, adminOnly, async (req, res) => {
    const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(p);
});
// delete
router.delete('/:id', protect, adminOnly, async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'deleted' });
});


module.exports = router;