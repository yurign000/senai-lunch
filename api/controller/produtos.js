const model = require('../model/produtos');

exports.getProdutos = (req,res) => {
    model.getProdutos().then(
        (response) => res.status(200).send(response.rows),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.postProduto = (req,res) => {
    const produto = req.body;

    model.postProduto(produto).then(
        (response) => res.status(200).send("Produto cadastrado"),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.putProduto = (req,res) => {
    const estoque = req.body;
    const id = req.params.id;

    model.putProduto(estoque,id).then(
        ()         => res.status(200).send("Produto atualizado"),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.deleteProduto = (req,res) => {
    const id = req.params.id;

    model.deleteProduto(id).then(
        ()         => res.status(200).send("Produto deletado"),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};