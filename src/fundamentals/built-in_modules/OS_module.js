// OS Module: a module that provides operating system-related utility methods and properties.
const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const uptime = parseFloat(os.uptime);
console.log(`The system uptime is ${uptime} seconds`);

// info about the current operating system
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);