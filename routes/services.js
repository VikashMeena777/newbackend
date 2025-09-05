const express = require('express');
const Service = require('../models/Service');
const { protect, adminOnly } = require('../middlewares/auth');
const router = express.Router();


router.get('/', async (req, res) => res.json(await Service.find()));
router.post('/', protect, adminOnly, async (req, res) => res.status(201).json(await Service.create(req.body)));
router.put('/:id', protect, adminOnly, async (req, res) => res.json(await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })));
router.delete('/:id', protect, adminOnly, async (req, res) => { await Service.findByIdAndDelete(req.params.id); res.json({ message: 'deleted' }); });


module.exports = router;