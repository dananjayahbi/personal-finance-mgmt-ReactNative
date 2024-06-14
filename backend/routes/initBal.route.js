const express = require('express');
const router = express.Router();
const { 
    checkData, 
    updateBoc,
    updateCash,
    updateCommercial,
    updatePeoples,
    checkBalance,
    getTotalBalance
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

//Check the balance
router.post('/checkBalance', checkBalance);

//Get total balance
router.get('/totalBalance', getTotalBalance);

module.exports = router;