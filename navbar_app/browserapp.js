import { createServer } from "http";
import { createReadStream, readFileSync } from "fs";

const homePage = readFileSync('./index.html');
const homeStyles = readFileSync('./style.css');
const homeScript = readFileSync('./script.js');


const server = createServer((req, res) => {
 const url = req.url;
 if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage);
  } 
  else  if (url === '/style.css'){
    res.writeHead(200, { 'Content-Type': 'text/css' });
    res.end(homeStyles);
  }
  
  else if (url === '/script.js'){
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(homeScript);
  }else {   
    //404 error
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>'); 
  }
});

server.listen(3000, ()=> console.log('server is running on port 3000'));