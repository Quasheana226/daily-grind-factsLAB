// DEPENDENCIES
const express = require("express");

const axios = require("axios");

const app = express();

require("dotenv").config(); // load .env file


//MIDDLEWARE


//ROUTES
app.get("api/fun-facts", async (requestAnimationFrame, res) => {
    res.json({ message: "Route working " });
})
//PORT


const PORT = process.env.PORT; //Grabbing port from .env
app.listen(PORT, () => {
    console.log(`The Daily grind server is running on PORT: ${PORT}`)
});