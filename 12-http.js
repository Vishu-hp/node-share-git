const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");

  if (req.url === "/") {
    res.end("welcome to our home page");
  } else if (req.url === "/about") {
    res.end("here is our brief history");
  } else {
    res.end(`
        <h2>Oops!</h2>
        <p>we couldn't find page you were looking for</p>
        <a href='/'>back to home</a>
      `);
  }
});

server.listen(5000);
