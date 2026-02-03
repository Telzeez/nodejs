// 1. Import from 'fs/promises' to use await
import { readFile } from 'node:fs/promises'; 
import { createReadStream } from 'node:fs';
import { createServer } from 'node:http';

const server = createServer(async (req, res) => {
  try {
    // 2. Await the file read. This returns the data directly.
    // No callback function is needed here anymore.
    const syncData = await readFile('./content/resultsync.txt', 'utf-8');

    const introMessage = `----------here is for the sync data--------\n${syncData}\n----------end sync data--------\n\n`;

    // 3. Write the first part of the response
    res.write(introMessage);

    // 4. Stream the second file
    const fileStream = createReadStream('./content/resultasync.txt', 'utf-8');

    // Pipe the stream to the response. 
    // { end: true } is the default, so it will close the connection when finished.
    fileStream.pipe(res);
    
    fileStream.on('error', (err) => {
      console.error(err);
      if (!res.headersSent) {
        res.end('Internal Server Error during streaming.');
      }
    });

  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('An error occurred while reading files.');
    }
  }
});

server.listen(3000, () => {
  console.log('Server started running on http://localhost:3000');
});
