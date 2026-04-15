const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'static' directory
app.use(express.static(path.join(__dirname, 'static')));

// Main route to serve the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});