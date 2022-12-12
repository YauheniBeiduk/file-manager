import { readdir } from 'node:fs/promises';



export const ls = async (path) =>  {
    const files= await readdir(path);
    console.table(files);

}