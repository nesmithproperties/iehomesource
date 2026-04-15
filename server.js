const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Configures EJS to read HTML files with Python-like logic
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// Setup static and templates folders
app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));

// Main route
app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
