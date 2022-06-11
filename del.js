import { rm } from 'fs/promises';

export async function del(pathToFile){

  try{
    await rm(pathToFile);
    console.log('File was deleted.' + '\n' + 'You are currently in ' + process.cwd());
  } catch(err) {
    console.log(err+'Operation failed ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

}
