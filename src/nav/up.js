import { chdir } from 'process';

export const up = () => {
    try {
        chdir('..');
    } catch (err) {
        console.error("Operation failed", err);
    }
}