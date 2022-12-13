import { homedir } from 'os'
import { chdir } from "process";

import { cat, move, create, rn, copy, remove } from './basic-operations/index.js';
import { os } from "./os/os.js";
import { calculateHash } from "./hash/hash.js";
import { getCurrentDirectory, up, cd } from './nav/index.js';
import { getUserName, ls } from "./utils/index.js";
import { compress, decompress } from "./compress/index.js";

const startApp = () => {
    const userName = getUserName();
    console.log(`Welcome to the File Manager, ${userName}!`);
    chdir(homedir());
    getCurrentDirectory();

    process.stdin.on('data', async (data) => {
        const input = data.toString().trim();
        const [command, ...args] = input.split(' ');
        const argument = args[0];
        const secondArg = args[1];

        switch (command) {
            case 'add':
                await create(argument);
                break;

            case 'cat':
                cat(argument);
                break;

            case 'cp':
                await copy(argument, secondArg);
                break;

            case 'ls':
                await ls();
                break;

            case 'up':
                up();
                break;

            case 'cd':
                cd(argument);
                break;

            case 'os':
                os(argument);
                break;

            case 'hash':
                await calculateHash(argument);
                break;

            case 'rn':
                await rn(argument, secondArg);
                break;

            case 'rm':
                remove(argument);
                break;

            case 'mv':
               await move(argument, secondArg);
                break;

            case 'compress':
                await compress(argument, secondArg);
                break;

            case 'decompress':
                await decompress(argument, secondArg);
                break;

            case '.exit':
                process.exit();
                break;

            default:
                console.log('Invalid input');
                break;
        }
        getCurrentDirectory();
        console.log(`Type command and wait results: `);
    });
    process.on('SIGINT', () => process.exit());
    process.on("exit", () => {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    });
};

await startApp();