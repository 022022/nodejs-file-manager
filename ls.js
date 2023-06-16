import { readdir } from 'fs/promises';

export async function ls(){
  const pathToFolder = process.cwd();
  try {
    const items = await readdir(pathToFolder);
    items.forEach(item => console.log(item));

    console.log('You are currently in ' + process.cwd());

  } catch (err) {
    console.log(err+'Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());
  }
}
