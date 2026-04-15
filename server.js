const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'templates'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index.html', (err, html) => {
        if (err) {
            console.error('RENDER ERROR:', err);
            return res.status(500).send('Check if base.html exists in templates folder');
        }
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
