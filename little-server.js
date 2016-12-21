// Similar to import http from 'http'
// but node doesn't have ES2015 modules
const http = require('http');

const PORT = 3333;

function onVisit(request, response) {
  console.log('This only shows up in the terminal');

  response.setHeader('Content-Type', 'text/html');

  response.end(``);
}

const server = http.createServer(onVisit);

server.listen(PORT);
