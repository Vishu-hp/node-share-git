const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("welcome");
// });

// Using Event Emitter Api
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome again");
});

server.listen(5000);
