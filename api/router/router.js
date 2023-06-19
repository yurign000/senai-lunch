const express = require('express');
const cors = require('cors');
const router = express.Router();

const produtos = require('../controller/produtos')
const usuarios = require('../controller/usuarios')

router.use(cors());

router.get('/listar-produtos', produtos.getProdutos);
router.post('/post-produto', produtos.postProduto);
router.put('/put-produto/:id', produtos.putProduto);
router.delete('/delete-produto/:id', produtos.deleteProduto);

router.post('/logar-conta', usuarios.getUsuario);
router.post('/criar-conta-tipo0', usuarios.postUsuario0);
router.put('/colocar-saldo', usuarios.putSaldo);
router.put('/gerar-codigo-pedido', usuarios.putCodigoPedido);

module.exports = router;