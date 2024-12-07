const { createReadStream } = require("fs");

// const stream = createReadStream("./content/big.txt");

// giving file encoding
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// giving custom chunk size
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (res) => {
  console.log(res);
});

stream.on("error", (err) => console.log(err));
