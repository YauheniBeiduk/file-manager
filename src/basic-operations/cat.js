import { createReadStream } from 'fs';
import { getAbsolutePath } from '../utils/index.js';

export const cat = (path) => {
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
