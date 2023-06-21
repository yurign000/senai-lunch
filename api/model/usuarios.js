const database = require('../database')

exports.getUsuario = (email,senha) => {
    const query = `SELECT * FROM USUARIO WHERE EMAIL='${email}' AND SENHA='${senha}'`;
    return database.query(query);
}

exports.postCliente = (c) => {
    const query = (
        "INSERT INTO USUARIO(EMAIL,NOME,SENHA,SALDO,TIPO) VALUES"+
        `('${c.email}','${c.nome}','${c.senha}','0','0')`
    )
    return database.query(query);
}

exports.putSaldo = (saldo,email) => {
    const query = `UPDATE USUARIO SET SALDO='${saldo}' WHERE EMAIL='${email}'`;
    console.log(query)
    return database.query(query);
}

exports.putCodigoPedido = (email,codigo) => {
    const query = `UPDATE USUARIO SET CODIGO_PEDIDO='${codigo}' WHERE EMAIL='${email}'`;
    return database.query(query)
}