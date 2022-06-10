// Move file  mv path_to_file path_to_new_directory

import { copy } from './cp.js';
import { del } from './del.js';

export async function mv(args){

  const splittedArgs = args.split(' ');

  if (splittedArgs.length !== 2){
    console.log ('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
    return;
  }

  await copy(args);
  const oldFileName = splittedArgs[0].split('\\').pop();
  del(oldFileName);

}