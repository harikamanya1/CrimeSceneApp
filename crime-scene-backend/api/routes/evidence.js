const express = require('express');
const Evidence = require('../models/evidence');
const router = express.Router();

// Create evidence
router.post('/', async (req, res) => {
  const newEvidence = new Evidence(req.body);
  try {
    const evidence = await newEvidence.save();
    res.json(evidence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all evidences
router.get('/', async (req, res) => {
  try {
    const evidences = await Evidence.find();
    res.json(evidences);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
