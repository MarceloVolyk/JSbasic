const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return;
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
        return;
    }
    res.end(`
        <h1>Ooops!</h1>
        <p1>We can't seem to find what you are looking for</p1>
        <a href="/">back home</a>`
    )
})

server.listen(5000)