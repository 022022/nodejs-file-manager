import { readdir } from 'fs/promises';

export async function ls(pathToFolder){
  try {
    const items = await readdir(pathToFolder);
    items.forEach(item => console.log(item));

  } catch (err) {
    throw new Error('FS operation failed');
  }
}
