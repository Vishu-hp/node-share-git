// const { readFile, writeFile } = require("fs");

// without using node js native util package
const { readFile, writeFile } = require("fs").promises;
const util = require("util");

// using a wrapper function for using promise to deal with asynchronous functionality
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

// without a wrapper function using promise to handle async functionality
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// using .then() approach for handling promises
// getText("./content/result-async.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// using async-await approach for handling promise (much cleaner)
const start = async () => {
  try {
    // with wrapper function
    // const first = await getText("./content/first.txt");
    // const second = await getText("./content/second.txt");

    // without wrapper function and using node js native util package
    // const first = await readFilePromise("./content/first.txt", "utf-8");
    // const second = await readFilePromise("./content/second.txt", "utf-8");

    // await writeFilePromise(
    //   "./content/result-mind-grenade.txt",
    //   `THIS IS AWESOME: ${first} ${second}`
    // );

    // without wrapper function and not using util package
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `\nTHIS IS AWESOME: ${first} ${second}`,
      { flag: "a" }
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
