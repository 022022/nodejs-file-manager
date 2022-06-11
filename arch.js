import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';




export function compress(args){

  const handledArgs = handleDoubleArgs(args);
  const { sourceFile, destinationFile } = handledArgs;

  const readStream = createReadStream(sourceFile);
  readStream.on('error', err => console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

  const writeStream = createWriteStream(destinationFile);
  writeStream.on('error', err => console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

  try{
    const compressFile = createBrotliCompress();
    pipeline(readStream, compressFile, writeStream, ()=>{});
    console.log('File decompressed.'+'\n'+'You are currently in ' + process.cwd());
  } catch(err) {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd())
  }
}


export function decompress(args){

  const handledArgs = handleDoubleArgs(args);
  const { sourceFile, destinationFile } = handledArgs;

  const readStream = createReadStream(sourceFile);
  readStream.on('error', err => console.log(err+'Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

  const writeStream = createWriteStream(destinationFile);
  writeStream.on('error', err => console.log(err+'Operation failed. ' + '\n' + 'You are currently in ' + process.cwd()));

  try{
    const compressFile = createBrotliDecompress();
    pipeline(readStream, compressFile, writeStream, ()=>{});
    console.log('File compressed.'+'\n'+'You are currently in ' + process.cwd());
  } catch(err) {
    console.log(err+'Operation failed. ' + '\n' + 'You are currently in ' + process.cwd())
  }
}



export function handleDoubleArgs(args){
  const splittedArgs = args.split(' "');
  console.log(splittedArgs);
  if (splittedArgs.length !== 2){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }
  let resultObj  = {};
  resultObj.sourceFile = splittedArgs[0].replaceAll('"', '');
  resultObj.destinationFile = splittedArgs[1].replaceAll('"', '');

  return resultObj;
}