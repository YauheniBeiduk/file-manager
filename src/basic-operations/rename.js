import { rename } from 'fs/promises';
import { getAbsolutePath } from '../utils/index.js';
import { parse, resolve } from "path";

export const rn = async (path, newName) => {
    try {
        const pathToFile = getAbsolutePath(path);
        const { dir } = parse(pathToFile);
        const moveFilePath = resolve(dir, newName);
        await rename(pathToFile, moveFilePath);

    } catch (err) {
        console.error("Operation failed", err);
    }
};