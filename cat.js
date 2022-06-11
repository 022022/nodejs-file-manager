// Read file and print it's content in console

import { createReadStream } from 'fs';
import { join } from 'path';

export function cat(pathToFile){

  const readStream = createReadStream(pathToFile);
  console.log('Reading '+pathToFile);
  readStream.on('data', chunk => console.log(chunk.toString()));
  readStream.on('error', () => { console.log('Operation failed');
                                  console.log('You are currently in ' + process.cwd())
                                });
  readStream.on('end', () => console.log('You are currently in ' + process.cwd()));


}