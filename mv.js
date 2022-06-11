// Move file  mv path_to_file path_to_new_directory

import { copy } from './cp.js';
import { del } from './del.js';

export async function mv(args){

  await copy(args);

  // if has been successfully copied - no need to check args again
  const splittedArgs = args.split('" "');
  const oldFilePath = splittedArgs[0].slice(1);
  del(oldFilePath);

}