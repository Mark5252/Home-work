const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    res.send(`Привіт, світ!`);
});

app.get('/json', (req, res) => {
    res.json({ message: `Це JSON-відповідь` });
});

app.get('/user/:id', (req, res) => {
    res.send(`Користувач з ID: ${req.params.id}`);
});

app.listen(3000, () => {
    console.log(`Сервер працює на http://localhost:3000`);
});

app.get('/search', (req, res) => {
    res.send(`Пошук за запитом: ${req.query.q}`);
});