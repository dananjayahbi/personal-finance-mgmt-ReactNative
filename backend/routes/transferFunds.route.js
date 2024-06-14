const express = require('express');
const router = express.Router();
const { 
    transferFund,
} = require('../controllers/transferFundController');

// Transfer funds
router.put('/transfer', transferFund);

module.exports = router;