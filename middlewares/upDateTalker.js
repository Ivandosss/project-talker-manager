const { read, updateBody } = require('../helpers/readBody');

const STATUS_OK = 200;

const PATH_FILE = './talker.json';

const updateTalker = async (request, response) => {
  const { id } = request.params;
  const { name, age, talk } = request.body;

  const updatedBody = {
    name,
    age: Number(age),
    id: Number(id),
    talk,
  };

  const data = await read(PATH_FILE, 'utf8');
  
  data.splice(data.findIndex((talker) => talker.id === Number(id)), 1, updatedBody);
  await updateBody(PATH_FILE, data);
  
  return response.status(STATUS_OK).json(updatedBody);
};

module.exports = updateTalker;