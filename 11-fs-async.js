const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = res;

  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = res;
    writeFile(
      "./content/result-async.txt",
      `Here is async work: ${first}, ${second}`,
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }

        console.log("done with task");
      }
    );
  });
});

console.log("starting next task");
