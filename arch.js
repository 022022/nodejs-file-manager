import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';




export async function compress(args){

  const handledArgs = await handleDoubleArgs(args);

  if(handledArgs === 'err') {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  const { sourceFile, destinationFile } = handledArgs;

  const readStream = createReadStream(sourceFile);
  readStream.on('error', err => {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  });

  const writeStream = createWriteStream(destinationFile);
  writeStream.on('error', err => {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd())
  });

  const compressFile = createBrotliCompress();
  pipeline(readStream, compressFile, writeStream, ()=>{});
  console.log('File compressed.'+'\n'+'You are currently in ' + process.cwd());

}


export async function decompress(args){

  const handledArgs = await handleDoubleArgs(args);

  if(handledArgs === 'err') {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
  }

  const { sourceFile, destinationFile } = handledArgs;

  console.log(sourceFile);

  try{
    const readStream = createReadStream(sourceFile);
    readStream.on('error', err => console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

    const writeStream = createWriteStream(destinationFile);
    writeStream.on('error', err => console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

    const compressFile = createBrotliDecompress();

    pipeline(readStream, compressFile, writeStream, ()=>{});

    writeStream.on('finish', () => console.log('File decompressed.'+'\n'+'You are currently in ' + process.cwd()));

  } catch(err) {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd())
  }
}



export async function handleDoubleArgs(args){

  if(!args.includes('" "')){
    return ('err');
  }

  const splittedArgs = args.split(' "');

  if (splittedArgs.length !== 2){
    return ('err');
  }

  const argsWithoutQuotes = splittedArgs.map(item => {
    if (item.startsWith('"')) item = item.slice(1);
    if (item.endsWith('"')) item = item.slice(0, item.length - 1);
    return item;
  });

  let resultObj  = {};

  resultObj.sourceFile = argsWithoutQuotes[0];
  resultObj.destinationFile = argsWithoutQuotes[1];

  return resultObj;
}