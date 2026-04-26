import fs from 'fs';

const constantsPath = './src/constants.ts';
let content = fs.readFileSync(constantsPath, 'utf8');

// Replace all instances of unsplash images in constants.ts
content = content.replace(/, image: 'https:\/\/images\.unsplash\.com[^']+'/g, '');
content = content.replace(/ image: 'https:\/\/images\.unsplash\.com[^']+', /g, '');

fs.writeFileSync(constantsPath, content, 'utf8');
console.log('Removed Unsplash images from constants.ts');
