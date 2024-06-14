const Boc = require("../models/boc.model");
const Cash = require("../models/cash.model");
const Commercial = require("../models/commercial.model");
const Peoples = require("../models/peoples.model");

//If there is no data in the database, this function will be called to initialize an object with the amount of 0.
const initializeData = async () => {
    try {
        // Initialize Boc object
        const boc = new Boc({ amount: 0 });
        await boc.save();

        // Initialize Cash object
        const cash = new Cash({ amount: 0 });
        await cash.save();

        // Initialize Commercial object
        const commercial = new Commercial({ amount: 0 });
        await commercial.save();

        // Initialize Peoples object
        const peoples = new Peoples({ amount: 0 });
        await peoples.save();

        console.log("Data initialized successfully");
    } catch (error) {
        console.error("Error initializing data:", error);
    }
};

// check if the data is initialized
const checkData = async (req,res) => {
    try {
        const boc = await Boc.findOne();
        const cash = await Cash.findOne();
        const commercial = await Commercial.findOne();
        const peoples = await Peoples.findOne();

        if (!boc || !cash || !commercial || !peoples) {
            initializeData();
            res.json({ message: "Data initialized successfully" });
        }

        console.log("Data already initialized");
        res.json({ message: "Data already initialized" });
    } catch (error) {
        console.error("Error checking data:", error);
    }
};

//Update the initial balance of the Boc object
const updateBoc = async (req, res) => {
    try {
        const boc = await Boc.findOne();
        boc.amount = req.body.amount;
        await boc.save();

        res.json({ message: "Boc updated successfully" });
    }
    catch (error) {
        console.error("Error updating Boc:", error);
    }
}

//Update the initial balance of the Cash object
const updateCash = async (req, res) => {
    try {
        const cash = await Cash.findOne();
        cash.amount = req.body.amount;
        await cash.save();

        res.json({ message: "Cash updated successfully" });
    }
    catch (error) {
        console.error("Error updating Cash:", error);
    }
}

//Update the initial balance of the Commercial object
const updateCommercial = async (req, res) => {
    try {
        const commercial = await Commercial.findOne();
        commercial.amount = req.body.amount;
        await commercial.save();

        res.json({ message: "Commercial updated successfully" });
    }
    catch (error) {
        console.error("Error updating Commercial:", error);
    }
}

//Update the initial balance of the Peoples object
const updatePeoples = async (req, res) => {
    try {
        const peoples = await Peoples.findOne();
        peoples.amount = req.body.amount;
        await peoples.save();

        res.json({ message: "Peoples updated successfully" });
    }
    catch (error) {
        console.error("Error updating Peoples:", error);
    }
}

module.exports = {
    checkData,
    updateBoc,
    updateCash,
    updateCommercial,
    updatePeoples
};
