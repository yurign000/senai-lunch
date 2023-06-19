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