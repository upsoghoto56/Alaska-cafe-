import fs from 'fs';
import path from 'path';

function findImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.resolve(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules')) {
        results = results.concat(findImages(filePath));
      }
    } else {
      if (filePath.match(/\.(jpeg|jpg|png|webp|gif)$/i)) {
        results.push(filePath);
      }
    }
  }
  return results;
}

console.log(findImages('/app'));
console.log(findImages('/tmp'));
