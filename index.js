const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// REQUISITOS

// rotas
const { talker, login } = require('./routers');

// requisitos 1, 2
app.use('/talker', talker);

// requisito 3
app.use('/login', login);

app.listen(PORT, () => {
  console.log('Online');
});
