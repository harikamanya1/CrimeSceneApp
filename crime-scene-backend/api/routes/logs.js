const express = require('express');
const Log = require('../models/Log');
const router = express.Router();

// Create log
router.post('/', async (req, res) => {
  const newLog = new Log(req.body);
  try {
    const log = await newLog.save();
    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all logs
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
