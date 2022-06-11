import { createReadStream, createWriteStream} from 'fs';
import { readdir } from 'fs/promises';
import { handleDoubleArgs } from './arch.js'

export async function copy(args){

  const handledArgs = await handleDoubleArgs(args);

  if(handledArgs === 'err') {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
  }

  const { sourceFile, destinationFile } = handledArgs;

  try{
    const readStream = createReadStream(sourceFile);

    readStream.on('error', err => {
      console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
      return;
    });

    readStream.on('open', () => {
      const writeStream = createWriteStream(destinationFile);
      readStream.pipe(writeStream);
    });

    readStream.on('end', () => {
      console.log('File was successfully copied');
      console.log('You are currently in ' + process.cwd());
    });

  } catch(err) {
    console.log('Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
    return;
  }

}