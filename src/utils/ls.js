import { readdir } from 'node:fs/promises';
import { cwd } from "process";

export const ls = async () =>  {
    try {
        const currentDir = cwd();
        const files = await readdir(currentDir, { withFileTypes: true });
        const result = files.map((file) => {
            return {
                Name: file.name,
                Type: file.isFile() ? 'file' : file.isDirectory() ? 'directory' : 'unknown',
            };
        });
        console.log(result);

        const sortedResult = result
            .sort((a,b) => (a.Name > b.Name) - (a.Name < b.Name))
            .sort((a, b) => (a.Type > b.Type) - (a.Type < b.Type))
        console.table(sortedResult);

    } catch (err) {
        console.error("Operation failed", err);
    }
}