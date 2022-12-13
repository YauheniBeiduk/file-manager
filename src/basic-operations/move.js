import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { parse, resolve } from "path";

import { getAbsolutePath } from '../utils/index.js';
import {pipeline} from "stream/promises";

 export const move = async (file, pathToMove) => {
    try {
        const pathToFile = getAbsolutePath(file);
        const { base } = parse(pathToFile);
        const moveFilePath = resolve(pathToMove, base);

        const readable = createReadStream(pathToFile, { encoding: 'utf8' });
        const writable = createWriteStream(moveFilePath);
        await pipeline(readable, writable);

        await unlink(pathToFile);
    } catch (err) {
        console.error("Operation failed", err);
    }
}