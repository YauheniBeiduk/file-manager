import { unlink } from 'fs/promises';
import { getAbsolutePath } from '../utils/index.js';

export const remove = async (path) => {
    try {
        const pathToFile = getAbsolutePath(path);

        await unlink(pathToFile);
    } catch (err) {
        console.error("Operation failed", err);
    }
};