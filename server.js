// DEPENDENCIES
const express = require("express");

const axios = require("axios");

const app = express();

require("dotenv").config(); // load .env file


//MIDDLEWARE


//ROUTES
app.get("api/fun-facts", async (req, res) => {
    //res.json({ message: "Route working " });

    try {
        const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random");
        

    // Pull out only the text from the response 
    //response data.text is just the fact text we want 
        const fact = response.data.text;

        res.json({ fact: fact });

    } catch (error) {
        console.error("Error fetching fun fact:", error);
        res.status(500).json({ error: "Failed to fetch fun fact" });
    }
})
//PORT


const PORT = process.env.PORT; //Grabbing port from .env
app.listen(PORT, () => {
    console.log(`The Daily grind server is running on PORT: ${PORT}`)
});