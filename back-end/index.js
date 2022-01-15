const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Testando conexão!!!'));

app.listen(3000, () => console.log(`App ouvindo porta 3000!`))

