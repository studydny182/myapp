const http = require('http');

const server = http.createServer((req, res) => {
  res.end('xxxHello dari local DevOps UPDATE');
});

server.listen(3000);
