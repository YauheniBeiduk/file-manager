import { unlink } from 'node:fs/promises';
import {getCurrentDirectory} from "../nav/getCurrentDirectory.mjs";

export const remove = (pathToRemoveFile) => {
    const a = getCurrentDirectory();
    const filePathNew = new URL(a+pathToRemoveFile, import.meta.url);
    try {
        unlink(filePathNew);
    }
    catch {
        throw Error("Operation failed");
    }
};