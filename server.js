const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = process.env.PORT || 3000;

// Configure delimiters to handle Python/Jinja2 tags safely
ejs.delimiter = '%';
ejs.openDelimiter = '{';
ejs.closeDelimiter = '}';

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'templates'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index.html', (err, html) => {
        if (err) {
            console.error('Render error:', err);
            // Fallback to send the file as plain text if EJS fails
            return res.sendFile(path.join(__dirname, 'templates', 'index.html'));
        }
        res.send(html);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
