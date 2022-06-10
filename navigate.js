import { join } from 'path';
import { setNewPath } from './main.js';

// current directory - process.cwd()

export async function cd(pathToFolder){
  const pathArr = pathToFolder.split('\\');
  const folder = pathArr.pop();
  const pathToWorkingDirectory = process.cwd();
  const newPath = join(pathToWorkingDirectory, folder);
  setNewPath(newPath);
}


export async function up(){
  const pathToWorkingDirectory = process.cwd();
  const pathArr = pathToWorkingDirectory.split('\\');
  pathArr.pop();
  const newPath = join(pathArr.join('\\'), '\\');
  setNewPath(newPath);
}