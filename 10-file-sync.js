const {readFileSync,writeFileSync} = require('fs');

/*It is equivalent to 

const fs = require('fs')

fs.readFileSync()*/
console.log('Start')

const first=readFileSync('./Content/first.txt','utf8')

const second=readFileSync('./Content/second.txt','utf8')

console.log(first,second)

//If you include {flag: 'a'} then will append the content in given file.

writeFileSync('./Content/result-sync.txt',`Here the result is: ${first}${second}`,{flag:'a'})

console.log('Done with the tast')
console.log('Start next task')