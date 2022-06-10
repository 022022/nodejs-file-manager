import { rm } from 'fs/promises';
import { join } from 'path';

export async function del(fileToDel){

  const pathToFile = join(process.cwd(), fileToDel);
  try{
    await rm(pathToFile);
    console.log(fileToDel + ' was removed.' + '\n' + 'You are currently in ' + process.cwd());
  } catch {
    console.log('Operation failed ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

}
