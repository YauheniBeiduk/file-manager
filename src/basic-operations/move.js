import { copy } from "./copy.js";
import { remove } from "./delete.js";

 export const move = (file, pathToMove) => {
    try {
        copy(file, pathToMove);
        console.log('file move', file);
        remove(file)
    }
    catch {
        throw Error("Operation failed");

    }
}