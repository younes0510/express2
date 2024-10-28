

const express = require('express')
const path = require('path');

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    next();
});

app.use((req, res, next) => {
    const date = new Date().getHours();

    if (date < 9 || date > 17) {

        res.status(403).sendFile(path.join(__dirname, 'pages', 'disponible.html'));
    }
    else {
        next();
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'welcom.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'contact.html'));
});

app.get('/article', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'article.html'));
});

app.post('/contact', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


app.listen(3000, () => console.log('Started server on http://localhost:3000'));












