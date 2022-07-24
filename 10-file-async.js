const {readFile,writeFile} = require('fs');

/*It is equivalent to 

const fs = require('fs')

fs.readFileSync()*/
console.log('start')
readFile('./Content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err)
        return
    }
    const first = result
    readFile('./Content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
        const second = result
        console.log(second)
        writeFile('./Content/result-async.txt',`Here the result is: ${first} ${second}`,(err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log('Done with the task')
            
        })
    })
})

console.log('start with next task')
