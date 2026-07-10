const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const files = walk(path.join(__dirname, 'src', 'sections'));
const strings = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Match <Text>...</Text> and <Heading>...</Heading>
  // This is a naive regex but works for simple cases
  const textRegex = /<(?:Text|Heading)[^>]*>([\s\S]*?)<\/(?:Text|Heading)>/g;
  let match;
  while ((match = textRegex.exec(content)) !== null) {
    const text = match[1].trim();
    if (text && !text.includes('{') && !text.includes('<')) {
      strings.add(text);
    }
  }
});

console.log(JSON.stringify(Array.from(strings), null, 2));
