import { createWriteStream, createReadStream } from 'fs';
import { getCurrentDirectory } from "../nav/index.js";

export const copy = (filePath, copyFileName = filePath) => {
    try {
    const a = getCurrentDirectory();
    const filePathNew = new URL(a+filePath, import.meta.url);
    const copyFilePath = new URL(a+copyFileName, import.meta.url);

    const readable = createReadStream(filePathNew, { encoding: 'utf8' });
    const writable = createWriteStream(copyFilePath);

    readable.pipe(writable);
    } catch {
        throw Error("Operation failed");
    }
}
