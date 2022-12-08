import { rename } from 'node:fs/promises';

export const rn = async (path, newPath) => {
    try {
        await rename(path, newPath);

    } catch {
        throw Error("Operation failed");
    }
};