1. reformating the data was important becuase useless faccts api returns a lot of fields that the client doenst need 

2. it is better to send a generic error because the axios error objsect could expose senstive inforamtion about our server setup or internal code.. instead we log out opwn error to our own console for debugging 



3. I would use req.query to grab an optional language parameter from the url and pass it to external api for example 
const language = req.query.language || "en";
const response = await axios.get(
    `https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`
);

