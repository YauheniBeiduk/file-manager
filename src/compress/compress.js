import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from "stream/promises";
import { resolve, parse } from "path";

export const compress = async (pathToFile, pathToDestination) => {
    try {
        const path = resolve(pathToFile);
        const { base } = parse(path);
        const fileName = `${base}.br`;
        const pathToWrite = resolve(pathToDestination, fileName);

        const readStream = createReadStream(path);
        const writeStream = createWriteStream(pathToWrite);
        const brotli = createBrotliCompress();


        await pipeline(readStream, brotli, writeStream);
    }  catch (error) {
        console.error("Operation failed", error);
    }
}