import { EOL, cpus, userInfo, arch } from 'node:os'

export const os = (command) => {
    if (!command) {
        console.log('Invalid input');
    }
    const { homedir, username } = userInfo();

    if (command === '--EOL') {
        console.log('EOL', JSON.stringify(EOL));
    }
    if (command === '--cpus') {
        const cpusInfo = cpus().map(({model, speed}) => ({model, speed}))

        console.log(cpusInfo);
    }
    if (command === '--homedir') {
        console.log(homedir);
    }
    if (command === '--username') {
        console.log(username);
    }
    if (command === '--architecture') {
        console.log(arch());
    }
}