const fs = require('fs/promises');

const read = async (path) => {
  try {
    const body = await fs.readFile(path, 'utf8');
      return JSON.parse(body);
  } catch (error) {
      return null;
  }
};

const body = async (object, scope) => {
  try {
    const isBody = await read(object);
    isBody.push(scope);

    await fs.writeFile(object, JSON.stringify(isBody));

    return scope;
  } catch (error) {
    return null;
  }
};

const updateBody = async (object, scope) => {
  try {
    await fs.writeFile(object, JSON.stringify(scope));
    return scope;
  } catch (error) {
    return null;
  }
};

module.exports = { read, body, updateBody };
