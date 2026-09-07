const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());

// Frontend
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.log("MongoDB Connection Error:", error.message);
    });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});