const express = require('express');
const router = require('./router.js');

const app = express();

app.use('/api', router);

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('<h1>Main page</h1>');
});

app.use(function(req, res) {
  res.send('404 Not Found');
});

app.listen(3000);
