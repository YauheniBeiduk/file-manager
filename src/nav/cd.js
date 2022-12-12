import { chdir } from 'process';

export const cd = (path) => {
    try {
        chdir(path);
    } catch (err) {
        console.error("Operation failed", err);
    }
}
