import { EOL, cpus, userInfo, arch } from 'os';

export const os = (command) => {
    const { homedir, username } = userInfo();

    if (command === '--EOL') {
        console.log('EOL', JSON.stringify(EOL));
    }
    else if (command === '--cpus') {
        const cpusInfo = cpus().map(({model, speed}) => ({model, speed: `${speed / 1000} Ghz`}));
        console.log(cpusInfo);
    }
    else if (command === '--homedir') {
        console.log(`Homedir is ${homedir}`);
    }
    else if (command === '--username') {
        console.log(`Username is ${username}`);
    }
    else if (command === '--architecture') {
        console.log(arch());
    } else {
        console.error("Operation failed");
    }
}