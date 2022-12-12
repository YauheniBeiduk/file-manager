import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto'
import { getAbsolutePath } from "../utils/getAbsolutePath.js";

export const calculateHash = async (path) => {
    try {
        const pathToFile = getAbsolutePath(path);
        const content = await readFile(pathToFile, {encoding: 'utf8'});

        const hash = createHash('sha256');
        const hex = hash.update(content).digest('hex');
        console.log(hex);
    } catch (err) {
        console.error("Operation failed", err);
    }
};
