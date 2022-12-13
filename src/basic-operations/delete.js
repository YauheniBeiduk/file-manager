import { unlink } from 'fs/promises';
import { getCurrentDirectory } from "../nav/index.js";

export const remove = (pathToRemoveFile) => {
    const a = getCurrentDirectory();
    const filePathNew = new URL(a+pathToRemoveFile, import.meta.url);
    try {
        unlink(filePathNew);
    } catch (err) {
        console.error("Operation failed", err);
    }
};