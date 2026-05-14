const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// @route   GET api/portfolio
// @desc    Get portfolio data
router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne().sort({ createdAt: -1 });
    if (!portfolio) {
      return res.status(404).json({ msg: 'Portfolio data not found' });
    }
    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/portfolio
// @desc    Update/Create portfolio data
router.post('/', async (req, res) => {
  const { profilePicture, resume, certifications } = req.body;

  try {
    let portfolio = await Portfolio.findOne().sort({ createdAt: -1 });

    if (portfolio) {
      // Update existing
      portfolio.profilePicture = profilePicture;
      portfolio.resume = resume;
      portfolio.certifications = certifications;
      await portfolio.save();
      return res.json(portfolio);
    }

    // Create new
    portfolio = new Portfolio({
      profilePicture,
      resume,
      certifications
    });

    await portfolio.save();
    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
