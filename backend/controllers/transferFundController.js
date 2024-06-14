const Boc = require("../models/boc.model");
const Cash = require("../models/cash.model");
const Commercial = require("../models/commercial.model");
const Peoples = require("../models/peoples.model");

//Transfer funds
const transferFund = async (req, res) => {
  try {
    const { from, to, amount } = req.body;

    let fromAccountObject = null;

    //check and get the relevant account
    if (from === "boc") {
      fromAccountObject = await Boc.findOne();
    } else if (from === "cash") {
      fromAccountObject = await Cash.findOne();
    } else if (from === "commercial") {
      fromAccountObject = await Commercial.findOne();
    } else if (from === "peoples") {
      fromAccountObject = await Peoples.findOne();
    }

    // Check if the amount is a positive number
    if (amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number" });
    }

    // Check if the from and to fields are the same
    if (from === to) {
      return res
        .status(400)
        .json({ message: "Cannot transfer funds to the same account" });
    }

    // Check if the from account has enough funds
    if (amount > fromAccountObject.amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    // Update the from account
    fromAccountObject.amount -= amount;
    await fromAccountObject.save();

    // Update the to account
    let toAccountObject = null;
    if (to === "boc") {
      toAccountObject = await Boc.findOne();
    } else if (to === "cash") {
      toAccountObject = await Cash.findOne();
    } else if (to === "commercial") {
      toAccountObject = await Commercial.findOne();
    } else if (to === "peoples") {
      toAccountObject = await Peoples.findOne();
    }
    toAccountObject.amount += amount;
    await toAccountObject.save();

    res.json({ message: "Funds transferred successfully" });
  } catch (error) {
    console.error("Error transferring funds:", error);
  }
};

module.exports = { transferFund };
