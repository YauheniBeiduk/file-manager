import { writeFile } from 'node:fs/promises';

export const create = (path, content = '') => {
   try {
       writeFile(path, content, { flag: 'wx' });
   }
   catch {
       throw Error("Operation failed");
        }
};
