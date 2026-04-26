import * as fs from 'fs';
import * as path from 'path';

const constantsPath = './src/constants.ts';
let content = fs.readFileSync(constantsPath, 'utf8');

// Replace all instances of `, image: '...'` or `image: '...', `
content = content.replace(/, image: '[^']+'/g, '');
content = content.replace(/ image: '[^']+', /g, '');

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Removed images from constants.ts');
