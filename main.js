// npm run start -- --username=MrUser

import { createInterface } from 'readline';
import { parse } from 'path';

import { setNewWorkingDirectory, cd, up } from './navigate.js';
import { ls } from './ls.js';

import { cat } from './cat.js';
import { add } from './add.js';
import { rn } from './rn.js';
import { copy } from './cp.js';
import { mv } from './mv.js';
import { del } from './del.js';

import { os } from './os.js';

import { hash } from './hash.js';

const { stdout, stdin, argv, cwd } = process;



const pathToWorkingDirectory = setNewWorkingDirectory();

const args = argv.slice(2); // если не передаст???
const username = args[0].split('=')[1];


stdout.write(`Welcome to the File Manager, ${username} !
You are currently in ${process.cwd()}.
`);

const rl = createInterface(stdin, stdout);

rl.on('line', (line) => { route(line) });
process.on('SIGINT', () => {  process.exit(); } );
process.on('exit', () => stdout.write(`Thank you for using File Manager, ${username} !`) );




function route(command){
  if(command === 'exit') process.exit();

  else if(command === 'up') up();
  else if(command === 'ls') ls(pathToWorkingDirectory);
  else if(command.startsWith('cd ')) cd(command.slice(3), pathToWorkingDirectory);

  else if(command.startsWith('cat ')) cat(command.slice(4)); // Read file and print it's content in console
  else if(command.startsWith('add ')) add(command.slice(4)); // Create empty file in current working directory
  else if(command.startsWith('rn ')) rn(command.slice(3)); // Rename file: rn path_to_file new_filename (must be in working directory)
  else if(command.startsWith('cp ')) copy(command.slice(3)); // Copy file: cp file.txt directory\file.txt (must be in working directory)
  else if(command.startsWith('mv ')) mv(command.slice(3)); // Move file  mv path_to_file path_to_new_directory (must be in working directory)
  else if(command.startsWith('rm ')) del(command.slice(3)); // Delete file: rm path_to_file (must be in working directory)

  else if(command.startsWith('os ')) os(command.split('--')[1]);

  else if(command.startsWith('hash ')) hash(command.slice(5)); // Calculate hash for file and print it into console  hash path_to_file
  else if(command.startsWith('compress ')) console.log(command);
  else if(command.startsWith('decompress ')) console.log(command);

  else stdout.write('Invalid input\n');

}
