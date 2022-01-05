const fs = require('fs/promises');

const read = async (path) => {
  try {
    const body = await fs.readFile(path, 'utf8');
    return JSON.parse(body);
  } catch (error) {
    return null;
  }
};

module.exports = { read };