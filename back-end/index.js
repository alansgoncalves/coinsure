const express = require('express');
const userCreate = require('./Routes/userCreate');
const loginUser = require('./Routes/loginUser');
const productCreate = require('./Routes/productCreate');
// const User = require('./models/User')
const cors = require('cors');
// const { User } = require('./models');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json())
app.use(cors());

app.use('/api/cadastro', userCreate);

app.post('/login', loginUser);
app.post('/produto', productCreate)

app.listen(3001, () => console.log(`App ouvindo porta 3001!`))
