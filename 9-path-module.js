const path = require('path')

console.log(path.sep)

//anything you will write in sting quote will be joined.
const filePath = path.join('/content','subfjjjolder','test.tkkkxt','hhsjuujed')

console.log(filePath)

const base = path.basename(filePath)

console.log(base)
//Here will join path from given string
const absolt = path.resolve(__dirname,'Contetnt','subFolder','test.txt')

console.log(absolt)