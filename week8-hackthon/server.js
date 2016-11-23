const express = require('express');
const path = require('path');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/static', express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('A user connected');
});

server.listen(8000, () => {
  console.log('Listening on localhost: 8000');
});
