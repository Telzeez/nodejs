import { EventEmitter } from "events";
import { createServer } from "http";
const myEvent = new EventEmitter();

myEvent.on('response', ()=> console.log('data received'));
myEvent.emit('response');

const server = createServer();
server.on('request', (req, res)=> {
    res.end('Hello this is my website')
}).listen(8080, ()=> {
    console.log('server started listenenimg to port 8080')
})
