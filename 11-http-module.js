const htt = require('http')

const server = htt.createServer((req,res)=>{

//onsole.log(res)
if(req.url==='/'){
res.end('Welcome to home page')
}

if(req.url==='/about')
{
    res.end('Welcome to about page')
}

res.end(`
<h1>OOps!!</h1>
<p>You are wrong directed</p>
<a href="/">Back Home</a>
`)

})
server.listen(5000)