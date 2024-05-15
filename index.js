const http = require("http");
const express = require("express");
const app = express();  
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

//io connection(input output)
io.on('connection', (socket) => {
  socket.on('user-message', (message) => {
    io.emit("message", message);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});