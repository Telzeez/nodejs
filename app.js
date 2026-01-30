import { createServer } from "http";

const server = createServer((req, res) => {
   if (req.url === '/') {
      res.write('Homepage');
      res.end('Welcome to my page');
   };
  if (req.url === '/about') {
   // Blocking code
   for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
         res.write(`${i}- ${j}`)
         
      }
   }
      res.end('About Page');
   };

      res.end('Page Not Found ')
 
  
}).listen(8080, ()=> {
   console.log('started listeneing on port')
})