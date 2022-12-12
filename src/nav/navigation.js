import {getCurrentDirectory} from "./getCurrentDirectory.js";
import {getAbsolutePath} from "../utils/getAbsolutePath.js";
import { chdir } from 'node:process';

export const up = () => {
    const path = getAbsolutePath('../');
    chdir(path);
    getCurrentDirectory();

}