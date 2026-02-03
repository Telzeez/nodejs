import { createServer  } from "http";
import { readFile, readFileSync } from "fs";


const getText = (path) => {
   return new Promise((resolve, reject) => {
      readFile(path, 'utf8', (err, res) => {
         if(err) reject(err);

         resolve(res);
      })
   })
};

getText('./content/text.txt').then(data=> console.log(data)).catch(error => console.log(error))