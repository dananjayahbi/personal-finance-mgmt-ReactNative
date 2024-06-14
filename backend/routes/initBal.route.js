const express = require('express');
const router = express.Router();
const { 
    checkData, 
    updateBoc,
    updateCash,
    updateCommercial,
    updatePeoples
} = require('../controllers/initBalController');

// Initialize the data
router.get('/init', checkData);

//Update BOC
router.put('/updBoc', updateBoc);

//Update Cash
router.put('/updCash', updateCash);

//Update Commercial
router.put('/updCommercial', updateCommercial);

//Update Peoples
router.put('/updPeoples', updatePeoples);

module.exports = router;