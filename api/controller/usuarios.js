const model = require('../model/usuarios');

exports.getUsuario = (req,res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    model.getUsuario(email,senha).then(
        (response) => res.status(200).send(response.rows),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.postCliente = (req,res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    model.postUsuario0(email,senha).then(
        ()         => res.status(200).send("Usuário cadastrado"),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.putSaldo = (req,res) => {
    const saldo = req.body.saldo;
    const email = req.body.email;

    model.putSaldo(saldo,email).then(
        ()         => res.status(200).send("Saldo atualizado"),
        (error)    => res.status(404).send({'Erro':error}) 
    );
};

exports.putCodigoPedido = (req,res) => {
    const email = req.body.emailx;
    const codigo = req.body.codigo;

    model.putCodigoPedido(email,codigo).then(
        ()         => res.status(200).send('Valido'),
        (error)    => res.status(404).send('Invalido') 
    );
};