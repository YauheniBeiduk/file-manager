import { cwd } from 'node:process';
import { homedir } from 'node:os'
import { read, move, create, rn, copy, remove } from './basic-operations/index.js';
import { os } from "./os/os.js";
import { calculateHash } from "./hash/hash.js";
import { getCurrentDirectory, up, cd } from './nav/index.js';
import { getUserName, ls } from "./utils/index.js";

const startApp = () => {
    const userName = getUserName();
    console.log(`Welcome to the File Manager, ${userName}!`);
    process.chdir(homedir());


    process.stdin.on('data', async (data) => {
        const input = data.toString().trim();
        const [command, ...args] = input.split(' ');
        const argument = args[0];
        // const secondValue = input[2];

        switch (command) {
            case '.exit':
                process.exit();
                break;

            case 'ls':
                ls(cwd());
                break;

            case 'up':
                try {
                    up();
                } catch (error) {
                    console.error('fail');
                }
                break;

            case 'cd':
                cd(argument);
                break;

            case 'os':
                os(argument);
                break;

            case 'hash':
                calculateHash(argument);
                break;

            case 'rn':
                rn(argument);
                break;

            case 'rm':
                remove(argument);
                break;

            case 'add':
                create(argument);
                break;

            case 'cat':
                read(argument);
                break;

            case 'cp':
                copy(argument);
                break;

            case 'mv':
               move(argument);
                break;

            default:
                process.stdout.write('Invalid input');
                break;
        }
        getCurrentDirectory();
        process.stdout.write(`Type command: `);
    });
    process.on('SIGINT', () => process.exit(0));
    process.on("exit", () => {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    });
};

await startApp();