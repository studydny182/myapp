const http = require('http');

const server = http.createServer((req, res) => {
  res.end('aaazzzxxxHello dari local DevOps UPDATE');
});

server.listen(3000);
