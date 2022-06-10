// Read file and print it's content in console

import { createReadStream } from 'fs';
import { join } from 'path';

export function cat(fileName){

  const pathToWorkingDirectory = process.cwd();

  const pathToFile = join(pathToWorkingDirectory, fileName);
  console.log('Reading '+pathToFile);

  const readStream = createReadStream(pathToFile);
  readStream.on('data', chunk => console.log(chunk.toString()));
  readStream.on('error', () => { console.log('Operation failed');
                                  console.log('You are currently in ' + process.cwd())
                                });

}