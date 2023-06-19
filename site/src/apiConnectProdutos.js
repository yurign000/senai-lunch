import axios from "axios";

export async function getProdutos(){
    const url = 'http://localhost:3000/senai-lunch/listar-produtos';
    let data;

    await axios.get(url)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function postProduto(produto){
    const url = 'http://localhost:3000/senai-lunch/post-produto';
    let data;

    await axios.post(url,produto)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function putProduto(id,estoque){
    const url = 'http://localhost:3000/senai-lunch/put-produto/'+id;
    let data;

    await axios.put(url,estoque)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}

export async function deleteProduto(id){
    const url = 'http://localhost:3000/senai-lunch/delete-produto/'+id;
    let data;

    await axios.delete(url)
        .then(response => data = response.data)
        .catch(error   => data = error);
    
    return data;
}