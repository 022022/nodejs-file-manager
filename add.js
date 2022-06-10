import { open } from 'fs';


export function add(newFileName){

  try { //можно ли здесь избавиться от колбэка?
    open(newFileName, 'w', () => {
                                console.log('File '+ newFileName + ' was created.'+ '\n' + 'You are currently in ' + process.cwd());
                                });
  } catch(err) {
    console.log(err+'Operation failed.'+ '\n' + 'You are currently in ' + process.cwd());
  }

}
