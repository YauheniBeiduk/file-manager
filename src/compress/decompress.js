import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from "stream/promises";
import { resolve, parse } from "path";

export const decompress = async (pathToFile, pathToDestination) => {
    try {
        const path = resolve(pathToFile);
        const { ext, name } = parse(path);
        if (!ext.includes('.br')) console.error("Please, write extension for file");

        const pathToWrite = resolve(pathToDestination, name);
        const readStream = createReadStream(path);
        const writeStream = createWriteStream(pathToWrite);
        const brotli = createBrotliDecompress();

        await pipeline(readStream, brotli, writeStream);

    }  catch (error) {
        console.error("Operation failed", error);
    }
}