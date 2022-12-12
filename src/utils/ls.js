import { readdir } from 'node:fs/promises';
import { cwd } from "process";

export const ls = async () =>  {
    try {
        const currentDir = cwd();
        const files = await readdir(currentDir);
        console.table(files);
    } catch (err) {
        console.error("Operation failed", err);
    }
}