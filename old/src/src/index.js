const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});