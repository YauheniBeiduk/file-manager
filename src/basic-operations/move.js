import { copy } from "./copy.js";
import { remove } from "./delete.js";
import {getAbsolutePath} from "../utils/getAbsolutePath.js";

 export const move = (file, pathToMove) => {
    try {
        const pathToFile = getAbsolutePath(file);
        const moveFilePath = getAbsolutePath(pathToMove);
        copy(pathToFile, moveFilePath);
        remove(file);
    }
    catch {
        throw Error("Operation failed");

    }
}