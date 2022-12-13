import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";

import { getAbsolutePath } from "../utils/getAbsolutePath.js";
import {pipeline} from "stream/promises";

 export const move = async (file, pathToMove) => {
    try {
        const pathToFile = getAbsolutePath(file);
        const moveFilePath = getAbsolutePath(pathToMove);
        const readable = createReadStream(pathToFile, { encoding: 'utf8' });
        const writable = createWriteStream(moveFilePath);
        await pipeline(readable, writable);

        await unlink(pathToFile);
    } catch (err) {
        console.error("Operation failed", err);
    }
}