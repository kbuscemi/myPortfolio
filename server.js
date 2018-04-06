const favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
