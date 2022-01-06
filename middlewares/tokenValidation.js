const ERROR_STATUS_TOKEN = 401;
const NOT_FOUND_MESSAGE = { message: 'Token não encontrado' };
const INVALID_TOKEN_MESAGE = { message: 'Token inválido' };

const tokenValidation = (req, res, next) => {
  const regex = /^.{16}/;
  const { authorization } = req.headers;

  if (!authorization) return res.status(ERROR_STATUS_TOKEN).json(NOT_FOUND_MESSAGE);
  if (!regex.test(authorization)) {
    return res.status(ERROR_STATUS_TOKEN).json(INVALID_TOKEN_MESAGE);
  }

  next();
};

module.exports = tokenValidation;
