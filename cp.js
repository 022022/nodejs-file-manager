import { join } from 'path';
import { open } from 'fs';
import { createReadStream, createWriteStream} from 'fs';
import { readdir } from 'fs/promises';

export async function copy(args){

  const splittedArgs = args.split(' ');

  if (splittedArgs.length !== 2){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  const oldFileName = splittedArgs[0].split('\\').pop();
  const destinationPathParts = splittedArgs[1].split('\\');
  const destinationFolderName = destinationPathParts[destinationPathParts.length - 2]; // to check if this folder exists in working directory

  const newFilePathFromCurrentDir = destinationPathParts.splice(-2).join('\\'); // folder-in-working-dir/copied-file.ext

  const oldFilePath = join(process.cwd(), oldFileName);
  const newFilePath = join(process.cwd(),  newFilePathFromCurrentDir);

  try{
    const filesList = await readdir(process.cwd());
    const checkFolderExists = filesList.find(item => item === destinationFolderName);
    const checkFileExists = filesList.find(item => item === oldFileName);

    if (!checkFolderExists || !checkFileExists){
      console.log('Operation failed ' + '\n' + 'You are currently in ' + process.cwd());
      return;
    }

  } catch(err) {
    console.log('Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
    return;
  }


  

  try{
    const readStream = createReadStream(oldFilePath);
    const writeStream = createWriteStream(newFilePath);
    readStream.pipe(writeStream);

    readStream.on('end', () => {
      console.log('File was successfully copied');
    });

  } catch(err) {
    console.log('Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
    return;
  }

}