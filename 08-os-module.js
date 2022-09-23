// 19092022 OS Modules build-in modules 
const os = require('os');

// Info about curren user
const user = os.userInfo(); // just invoked
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem,
};
console.log(currentOS);
