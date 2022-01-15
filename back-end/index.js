const express = require('express');
const userCreate = require('./Routes/userCreate')

const app = express();

app.use(express.json())
app.post('/cadastro', userCreate);

app.listen(3000, () => console.log(`App ouvindo porta 3000!`))
