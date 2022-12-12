import { createReadStream } from 'node:fs';
import { getCurrentDirectory } from "../nav/index.js";

export const read = async (filePath) => {
    const a = getCurrentDirectory();
    const filePathNew = new URL(a+filePath, import.meta.url);
    console.log('filePathNew.pathname',filePathNew.pathname);

    const ReadStream = createReadStream(filePathNew.pathname, { encoding: 'utf8' });
    ReadStream.on('readable', () => {
        console.log(`readable: ${ReadStream.read()}`);
    });
    ReadStream.on('end', () => {
        console.log('end');
    });
};
