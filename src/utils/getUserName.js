export const getUserName = () => {
    const args = process.argv.slice(2);
    return args.find((item) => item.startsWith('--username=')).split('=').pop();
}