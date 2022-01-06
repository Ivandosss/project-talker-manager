const { read } = require('../helpers/readBody');

const path = './talker.json';
const responseError = { menssage: 'Pessoa palestrante não encontrada' };

  const getTalkerId = async (req, res) => {
  const data = await read(path);
  const findTalker = data.find((talker) => talker.id === Number(req.params.id));
  return findTalker ? res.status(200).json(findTalker) : res.status(404).json(responseError);
};

module.exports = getTalkerId;