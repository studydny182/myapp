const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello dari local DevOps 🚀');
});

server.listen(3000);