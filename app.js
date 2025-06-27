const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

function writeData(data) {
  fs.writeFileSync(filePath, data + '\n', 'utf8');
}

function appendData(data) {
  fs.appendFileSync(filePath, data + '\n', 'utf8');
}

function readData() {
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

module.exports = {
  writeData,
  appendData,
  readData,
};
