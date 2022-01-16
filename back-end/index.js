const express = require('express');
const userCreate = require('./Routes/userCreate');
const loginUser = require('./Routes/loginUser');
const productCreate = require('./Routes/productCreate');

const app = express();

app.use(express.json())
app.post('/cadastro', userCreate);
app.post('/login', loginUser);
app.post('/produto', productCreate)

app.listen(3000, () => console.log(`App ouvindo porta 3000!`))
