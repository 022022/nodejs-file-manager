// npm run start -- --username=MrUser

import { createInterface } from 'readline';
import { homedir } from 'os';
import { parse } from 'path';


import { ls } from './ls.js';
import { cat } from './cat.js';
import { os } from './os.js';
import { add } from './add.js';
import { rn } from './rn.js';
import { cd, up } from './move.js';


const { stdout, stdin, chdir, argv } = process;

let pathToWorkingDirectory;

export function setNewPath(path){
  pathToWorkingDirectory = path || homedir();
  try {
    chdir(pathToWorkingDirectory);
    console.log('You are currently in ' + process.cwd());
  } catch (err) {
    console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
  }
}

setNewPath();

const args = argv.slice(2); // если не передаст???
const username = args[0].split('=')[1];


const pathToRoot = parse(homedir()).root;

stdout.write(`Welcome to the File Manager, ${username} !
You are currently in ${pathToWorkingDirectory}.
`);

const rl = createInterface(stdin, stdout);
// rl.setPrompt(`You are currently in ${pathToWorkingDirectory}`);
// rl.prompt();

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
  else if(command.startsWith('rn ')) rn(command.slice(3)); // Rename file: rn path_to_file new_filename
  else if(command.startsWith('cp ')) console.log(command);
  else if(command.startsWith('mv ')) console.log(command);
  else if(command.startsWith('rm ')) console.log(command);

  else if(command.startsWith('os ')) os(command.split('--')[1]);

  else if(command.startsWith('hash ')) console.log(command);
  else if(command.startsWith('compress ')) console.log(command);
  else if(command.startsWith('decompress ')) console.log(command);

  else stdout.write('Invalid input\n');

}
