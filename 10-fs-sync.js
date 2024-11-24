const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync("./content/result-sync.txt", `Hello there: ${first} ${second}`);

// for appending new txt with old txt(if any)
writeFileSync("./content/result-sync.txt", `Hello there: ${first} ${second}`, {
  flag: "a",
});

console.log("done with task");
console.log("start another task");
