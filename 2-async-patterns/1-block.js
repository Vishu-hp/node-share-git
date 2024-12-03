const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i}, ${j}`);
      }
    }
    res.end("about");
  } else {
    res.end("error");
  }
});

server.listen(5000, () => {
  console.log("listening to server on 5000");
});
