import process from 'node:process';

import { getCurrentDirectory } from "./getCurrentDirectory.js";

export const cd = (path) => {
    process.chdir(path);
    getCurrentDirectory();
}
