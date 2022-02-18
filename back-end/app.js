// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const pinController = require("./controllers/pinController.js")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
app.use(express.static('public'))

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/pins", pinController);

// 404 Page

app.get("*", (req,res)=>{
  res.status(404).send("Page Not Found")
})

// EXPORT
module.exports = app;
