// Initialize Socket.IO client
var socket = io();

// Send message when the send button is clicked
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');
const allMessages = document.getElementById('messages');

// Listen for 'message' event from the server
socket.on('message', (message) => {
  const p = document.createElement('p');
  p.innerText = message;
  allMessages.appendChild(p);
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form submission
  const message = messageInput.value;
  console.log(message);
  socket.emit("user-message", message);
  messageInput.value = ''; // Clear input field after sending message
});
