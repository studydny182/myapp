const http = require('http');

const server = http.createServer((req, res) => {
  res.end('zzzHello dari local DevOps UPDATE');
});

server.listen(3000);
