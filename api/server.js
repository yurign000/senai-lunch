const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3000;

const router = require('./router/router.js');

app.use(bodyParser.json());
app.use("/senai-lunch",router);
app.use(cors());

app.get("/senai-lunch", (req,res) => {
    const rotas = [
        "/senai-lunch/listar-produtos",
        "/senai-lunch/post-produto",
        "/senai-lunch/put-produto/id",
        "/senai-lunch/delete-produto/id",
        "/senai-lunch/logar-conta",
        "/senai-lunch/criar-conta-tipo0",
        "/senai-lunch/colocar-saldo",
        "/senai-lunch/gerar-codigo-pedido",
    ];

    res.status(200).send({"rotas":rotas});
});
app.get("*", (req,res) => {
    res.status(404).send('Não foi possível encontrar a rota especificada')
})

app.listen(port,'localhost', () => {
    console.log('http://localhost:3000/senai-lunch');
});