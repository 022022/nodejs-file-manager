import { createHash } from 'crypto';
import { join, resolve } from 'path';
import { createReadStream } from 'fs';

export function hash(arg){

    const pathToFile = resolve(arg); // нужно ли делать так, чтобы если слеши в переданном арг не те, resolve заменил бы? или лишнее?

    const readStream = createReadStream(pathToFile);
    readStream.on('error', err => console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()))
    readStream.on('data', chunk => {
      const hashObj = createHash('sha256');
      hashObj.update(chunk);
      const hex = hashObj.digest('hex');
      console.log(hex);
    });
}