import { rename } from 'fs/promises';
import { join } from 'path';

export async function rn(args){
  const splittedArgs = args.split(' ');

  if (splittedArgs.length !== 2){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  const oldFileName = splittedArgs[0].split('\\').pop();

  const pathToFile = join(process.cwd(), oldFileName);
  const newPath = join(process.cwd(), splittedArgs[1]);

  try{
    await rename(pathToFile, newPath);
  } catch(err) {
    console.log('Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  console.log('File '+ oldFileName + ' was renamed to ' + splittedArgs[1] + '\n' + 'You are currently in ' + process.cwd());
}