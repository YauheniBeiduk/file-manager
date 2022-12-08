import process from 'node:process';
import { homedir } from 'node:os'
import { read } from './basic-operations/read.js';
import {up} from './nav/navigation.js';
// import {create} from './basic-operations/create.js';
// import {rn} from "./basic-operations/rename.js";
// import { copy } from './basic-operations/copy.js';
// import {remove} from './basic-operations/delete.js';

const greetUser = () => {
    const args = process.argv.slice(2);
    const userName = args.find((item) => item.startsWith('--username=')).split('=').pop();

    console.log(`Welcome to the File Manager, ${userName}!`);



    const userHomeDir = homedir();
    console.log('userHomeDir', userHomeDir);
    up();
    read('/src/nav/navigation.js');

    // const content = 'I am fresh and young';
    // create('src/nav/fresh.txt', content);
    // rn('src/nav/fresh.txt', 'src/nav/abc.txt');
    // copy('/src/nav/navigation.js', '/src/nav/navigation.js');
    // remove('/src/nav/navigation.js');


    process.on("exit", () => {
        console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    });
};

await greetUser();
