const { Pool } = require('pg')

const database = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crm',
  password: 'root',
  port: 5432,
})

/*database.query('SELECT * FROM colaborador where id=1', (err, res) => {
  console.log(err, res) 
  database.end() 
})*/