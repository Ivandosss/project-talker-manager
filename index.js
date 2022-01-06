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

// Rotas;
const { talker, login } = require('./routers');

// Requisito 1, 2 e 4;
app.use('/talker', talker);
// Requisito 3;
app.use('/login', login);

app.listen(PORT, () => {
  console.log('Online');
});
