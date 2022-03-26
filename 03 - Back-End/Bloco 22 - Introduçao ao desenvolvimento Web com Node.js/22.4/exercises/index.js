const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// Exercício 1
app.get('/ping', (req, res) => {
  res.json({ "message": "pong" })
});

// Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` })
});

// Exercício 3
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: `Unauthorized` });
  }

  res.status(200).json({ message: `Hello, ${name}!` });
});

// Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})

// Error Middleware
app.use(function (err, req, res, next) {
  res.status(500).send(`Erro: ${err.message}`);
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
