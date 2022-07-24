const names = require('./names')
const sayHi1 = require('./func')
const myint = require('./1-intro')
const os = require('os')
console.log(names)
const user = os.userInfo()
console.log(user)
console.log(`The system Uptime is ${os.uptime()}`)
console.log(names.sendobj)
console.warn(names.itemarray);

sayHi1.callfun('Mahesh')
sayHi1.callfun(names.gold)
sayHi1.callfun(names.name2)
