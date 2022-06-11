import { join } from 'path';
import { homedir } from 'os';


export function setNewWorkingDirectory(path){
  const pathToWorkingDirectory = path || homedir();
  try {
    process.chdir(pathToWorkingDirectory);
    console.log('You are currently in ' + process.cwd());
  } catch (err) {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
  }
}



export async function cd(pathToFolder){
  const pathArr = pathToFolder.split('\\');
  const folder = pathArr.pop();
  const pathToWorkingDirectory = process.cwd();
  const newPath = join(pathToWorkingDirectory, folder);
  setNewWorkingDirectory(newPath);
}


export async function up(){
  const pathToWorkingDirectory = process.cwd();
  const pathArr = pathToWorkingDirectory.split('\\');
  pathArr.pop();
  const newPath = join(pathArr.join('\\'), '\\');
  setNewWorkingDirectory(newPath);
}