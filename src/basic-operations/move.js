import { unlink } from 'node:fs/promises';
import { copy } from "./copy.js";

 export const move = (pathToMove) => {
    try {
        copy(pathToMove);
        unlink(pathToMove)
    }
    catch {
        throw Error("Operation failed");

    }
}