import { rename } from 'fs/promises';

export async function rn(args){

  if(!args.includes('" ') || !args.startsWith('"')){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  const splittedArgs = args.split('" ');

  if (splittedArgs.length !== 2){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  const pathToFile = splittedArgs[0].slice(1);
  const newName = splittedArgs[1];

  console.log(pathToFile);
  console.log(newName);

  try{
    await rename(pathToFile, newName);
  } catch(err) {
    console.log('Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  console.log('File was renamed to ' + newName + '\n' + 'You are currently in ' + process.cwd());
}