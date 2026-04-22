const http = require('http');

const server = http.createServer((req, res) => {
  res.end('zzzxxxHello dari local DevOps UPDATE');
});

server.listen(3000);
