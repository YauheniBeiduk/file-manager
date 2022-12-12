import { isAbsolute, join } from 'node:path';
import { cwd } from 'node:process';

export const getAbsolutePath = (path) => (isAbsolute(path) ? path : join(cwd(), path));
