import { open } from 'fs/promises';
import { getAbsolutePath } from '../utils/index.js';

export const create = async (path) => {
   try {
       const pathToFile = getAbsolutePath(path);
       await open(pathToFile, 'wx');
   }
   catch (err) {
       console.error("Operation failed", err);
   }
};
