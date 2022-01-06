const { body, read } = require('../helpers/readBody');

const PATH_FILE = './talker.json';

const STATUS_OK = 201;

const insertTalker = async (request, response) => {
  const { name, age, talk } = request.body;

  const data = await read(PATH_FILE);

  const addedObject = {
    name,
    age: Number(age),
    id: data.length + 1,
    talk,
  };

  await body(PATH_FILE, addedObject);

  return response.status(STATUS_OK).json(addedObject);
};

module.exports = insertTalker;