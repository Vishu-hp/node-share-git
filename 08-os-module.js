const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// get system uptime in seconds
console.log(`System has been up ${os.uptime()} seconds`);

// get your os info
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
