const { read } = require('../helpers/readBody');

const path = './talker.json';

const getTalkers = async (_req, res) => {
  const data = await read(path) || [];
  return res.status(200).json(data);
};

module.exports = getTalkers;
