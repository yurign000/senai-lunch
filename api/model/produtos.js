const database = require('../database')

exports.getProdutos = () => {
    const query = "SELECT * FROM PRODUTO";
    return database.query(query);
}

exports.postProduto = (p) => {
    const query = (
        "INSERT INTO PRODUTO(NOME,CATEGORIA,PRECO,IMAGEM_URL,ESTOQUE) VALUES"+
        `('${p.nome}', '${p.categoria}', '${p.preco}', '${p.imagem_url}', '${p.estoque}')`
    );

    return database.query(query);
}

exports.putProduto = (estoque,id) => {
    const query = `UPDATE PRODUTO SET ESTOQUE='${estoque}' WHERE ID_PRODUTO='${id}'`;
    return database.query(query);
}

exports.deleteProduto = (id) => {
    const query = `DELETE FROM PRODUTO WHERE ID_PRODUTO='${id}'`;
    return database.query(query);
}


