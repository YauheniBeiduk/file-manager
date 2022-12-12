import { writeFile } from 'fs/promises';
import { getAbsolutePath } from "../utils/getAbsolutePath.js";

export const create = (path, content = '') => {
   try {
       const pathToFile = getAbsolutePath(path);
       writeFile(pathToFile, content, { flag: 'wx' });
   }
   catch (err) {
       console.error("Operation failed", err);
   }
};
