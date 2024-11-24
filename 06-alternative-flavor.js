// as exports gets value as object , we can also use it in below way

module.exports.person = ["item1", "item2"];

const person = {
  id: "1",
  name: "vishu",
};

module.exports.singlePerson = person;
