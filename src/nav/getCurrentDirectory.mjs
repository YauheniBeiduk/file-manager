import process from 'node:process';


export const getCurrentDirectory = () => {
    const currentDir = process.cwd();
    console.log(`You are currently in ${currentDir}`)
    return currentDir;
}