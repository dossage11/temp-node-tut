
const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOS = {
    osname:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS.osname)
console.log(currentOS.release)
console.log(currentOS.totalMem)