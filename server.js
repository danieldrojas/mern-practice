const express = require("express");
const mongoose = require("mongoose")

var app = express();

const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
    res.json({
        success: true
    });
})

mongoose
    .connect(process.env.MONGOD_URI || "mongodb://localhost/mern-practice",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    .then(() => {
        console.log("connected to the database")
    })
    .catch((err) => {
        console.log("unable to connect to the database")
        console.log(err)
    })

app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`)
})