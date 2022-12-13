import { rename } from 'fs/promises';

export const rn = async (path, newPath) => {
    try {
        await rename(path, newPath);

    } catch (err) {
        console.error("Operation failed", err);
    }
};