ejs.closeDelimiter = '}';

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/static', express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
