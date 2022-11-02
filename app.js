const express = require('express');
const sequelize = require('./config/sequelize');
const app = express()
const port = 5000;
const db = require("./db");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/atualizar/crm', (req, res) => {
    res.sendFile(__dirname + '/views/atualizarCRM.html')
})

app.get('/cadastro/colaborador', (req, res) => {
    res.sendFile(__dirname + '/views/cadastroColaborador.html')
})

app.get('/cadastro/crm', (req, res) => {
    res.sendFile(__dirname + '/views/cadastroCRM.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/visualizar/colaborador', (req, res) => {
    res.sendFile(__dirname + '/views/visualizarColaborador.html')
})

app.get('/visualizar/crm', (req, res) => {
    res.sendFile(__dirname + '/views/visualizarCRM.html')
})

app.get('/sobre', (req, res) => {
    res.send("Um simples tutorial de NodeJS.")
})

app.use('/public', express.static(__dirname + '/public'))

/*sequelize.sync().then(() => {
    console.log("Conectado ao banco de dados.");
})*/

app.listen(port, () => {
  console.log('Servidor rodando na porta:', port)
})
