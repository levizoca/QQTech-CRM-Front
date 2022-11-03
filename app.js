const express = require('express');
const app = express()
const port = 5000;
const exphbs = require ('express-handlebars');

app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/atualizar/crm', (req, res) => {
    res.render('atualizarCRM')
})

app.get('/cadastro/colaborador', (req, res) => {
    res.render('cadastroColaborador')
})

app.get('/cadastro/crm', (req, res) => {
    res.render('cadastroCRM')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/colaborador/visualizar', (req, res) => {
    res.render('visualizarColaborador')
})

app.get('/visualizar/crm', (req, res) => {
    res.render('visualizarCRM')
})

app.get('/sobre', (req, res) => {
    res.send("Um simples tutorial de NodeJS.")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


app.use('/public', express.static(__dirname + '/public'))

/*sequelize.sync().then(() => {
    console.log("Conectado ao banco de dados.");
})*/

app.listen(port, () => {
  console.log('Servidor rodando na porta:', port)
})
