import { resolve } from 'dns';
import {promisify} from 'util'
import {readFile, writeFile} from 'fs';
import { get } from 'http';

const readFilePromise = promisify(readFile);
const writeFilePromise =  promisify(writeFile)

const getTest = (filePath) => {
   return new Promise((resolve, reject) => {
      readFile(filePath, 'utf8', (err, data) => {
         err ? reject(err) : resolve(data)
      });
   })
}
getTest('./content/subfolder/test.txt').then(data => console.log(data)).catch(err => console.log(err));

const start = async () => {
   try {
      const first = await getTest()
   } catch (error) {
      
   }
}