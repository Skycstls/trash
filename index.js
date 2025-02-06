const express = require('express');
const app = express();

const APIKEY = "1234"
const mensajes = [];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post("/messages", (req, res) => {
    const { message } = req.query;
    mensajes.push(message);
    res.send("Message created");
});

app.get("/messages", (req, res) => {
    res.json(mensajes);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});