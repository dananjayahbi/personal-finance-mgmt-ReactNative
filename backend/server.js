const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Setting up routing
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/init", require("./routes/initBal.route"));
app.use("/transfer", require("./routes/transferFunds.route"));

app.listen(PORT, () => {
  console.log("Server up with port : " + PORT);
});

// Setting up the database connection
const URL = process.env.MONGODB_URL;

mongoose.set("strictQuery", true);
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully!");
});
