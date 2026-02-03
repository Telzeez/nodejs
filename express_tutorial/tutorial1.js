import { createServer } from "http";

const myServer = createServer((req, res) => {
    const url = req.url;
//   homepage
    if (url === '/') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>HomePage</h1>');
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>AboutPage</h1>');
        res.end()
    }
    else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.write('<h2>Life is Good</h2>')
        res.end()
    }

}).listen(5001, ()=> {
    console.log('server started listening for an incoming request')
})