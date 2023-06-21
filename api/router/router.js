const express = require('express');
const cors = require('cors');
const router = express.Router();

const produtos = require('../controller/produtos');
const usuarios = require('../controller/usuarios');

router.use(cors());

router.get('/pegar-produtos', produtos.getProdutos);
router.post('/criar-produto', produtos.postProduto);
router.put('/atualizar-produto/:id', produtos.putProduto);
router.delete('/deletar-produto/:id', produtos.deleteProduto);

router.post('/logar-conta', usuarios.getUsuario);
router.post('/criar-conta', usuarios.postCliente);
router.put('/atualizar-saldo', usuarios.putSaldo);
router.put('/gerar-codigo-pedido', usuarios.putCodigoPedido);

module.exports = router;