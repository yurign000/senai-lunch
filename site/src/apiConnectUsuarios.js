import axios from "axios";

export async function logarUsuario(email,senha){
    const url = 'http://localhost:3000/senai-lunch/logar-conta';
    let data;
    let usuario = {
        email: email,
        senha: senha
    }

    await axios.post(url,usuario)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

// Apenas clientes podem ser criados pelo site
// Vendedores devem ser criados direto pelo banco de dados
export async function criarConta(nome,email,senha){
    const url = 'http://localhost:3000/senai-lunch/criar-conta';
    let data;
    let cliente = {
        nome: nome,
        email: email,
        senha: senha
    }

    await axios.post(url,cliente)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function colocarSaldo(saldo,email){
    const url = 'http://localhost:3000/senai-lunch/atualizar-saldo';
    let data;

    await axios.post(url,{saldo,email})
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function atualizarCodigoPedido(email,codigo){
    const url = 'http://localhost:3000/senai-lunch/atualizar-codigo-pedido';
    let data;

    await axios.post(url,{email,codigo})
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}
