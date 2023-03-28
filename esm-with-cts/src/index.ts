import { foo } from './child-a.js';
import * as commonjs from './commonjs.cjs';
console.log(commonjs);

const { bar } = commonjs;

console.log(bar);
console.log(await foo());
