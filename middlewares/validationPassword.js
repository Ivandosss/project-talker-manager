const validationPassword = (req, res, next) => {
  const { password } = req.body;
  const regex = /^.{6}/;
  if (!password) {
 return res.status(400)
  .json({ message: 'O campo "passwoer" é obrigatório' }); 
}
if (!regex.test(password)) {
 return res.status(400)
  .json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
} 

  next();
};

module.exports = validationPassword;