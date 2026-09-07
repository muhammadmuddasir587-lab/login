const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3000;

// JSON data receive karne ke liye
app.use(express.json());

// HTML + CSS public folder se serve karna
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/test", (req, res) => {
    res.json({
        message: "Backend bilkul sahi chal raha hai 🚀"
    });
});

app.listen(PORT, () => {
    console.log(`Server chalta hua yahan dekhein: http://localhost:${PORT}`);
}); 