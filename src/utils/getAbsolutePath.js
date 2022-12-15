import { isAbsolute, resolve } from 'path';
import { cwd } from 'process';

export const getAbsolutePath = (path) => (isAbsolute(path) ? path : resolve(cwd(), path));
