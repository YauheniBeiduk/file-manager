import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from "../utils/getAbsolutePath.js";

export const copy = async (filePath, copyFilePath) => {
    try {
    const pathToFile = getAbsolutePath(filePath);
    const cpFilePath = getAbsolutePath(copyFilePath);
    const readable = createReadStream(pathToFile, { encoding: 'utf8' });
    const writable = createWriteStream(cpFilePath);

    await pipeline(readable, writable);
    } catch (err) {
        console.error("Operation failed", err);
    }
}
