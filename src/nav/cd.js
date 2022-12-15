import { chdir } from 'process';
import { getAbsolutePath } from '../utils/index.js';

export const cd = (path) => {
    try {
        const updatedPath = getAbsolutePath(path);
        chdir(updatedPath);
    } catch (err) {
        console.error("Operation failed", err);
    }
}
