import { createReadStream } from 'node:fs';
import { getAbsolutePath } from "../utils/getAbsolutePath.js";

export const read = (path) => {
    try {
        const pathToFile = getAbsolutePath(path);
        const ReadStream = createReadStream(pathToFile, {encoding: 'utf8'});
        ReadStream.on('readable', () => {
            console.log(`${ReadStream.read()}`);
        });
        ReadStream.on('end', () => {
            console.log('end');
        });
    } catch (err) {
        console.error("Operation failed", err);
    }
};
