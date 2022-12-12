import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto'
import { getCurrentDirectory } from '../nav/index.js';

export const calculateHash = async (file) => {
    const filePath = getCurrentDirectory();

    const content = await readFile(filePath+file, { encoding: 'utf8' });

    const hash = createHash('sha256');
    const hex = hash.update(content).digest('hex');
    console.log(hex);
};
