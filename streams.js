import { createWriteStream, createReadStream } from "fs";

// const file = createWriteStream('./content/bigFile.txt');

// for (let i = 0; i <1000; i++) {
//     file.write('Hello world\n');
    
// };
// file.close();

const stream = createReadStream('./content/bigFile.txt', {
highWaterMark: 9000,
encoding: 'utf8'
});
stream.on('data', (data) =>{
    console.log(data)
})