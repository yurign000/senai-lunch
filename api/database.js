const pg = require('pg');
require('dotenv').config()

const database = new pg.Client(process.env.URL);

database.connect(
    ()      => console.log('conectado ao banco de dados'),
    (error) => console.log({"Erro":error})
);

module.exports = database;