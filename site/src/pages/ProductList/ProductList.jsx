import './productList.css'
import { pegarProdutos } from '../../apiConnectProdutos'
import { logarUsuario } from '../../apiConnectUsuarios';
import { useEffect,useState } from 'react'

import { useContext } from "react";
import { UsuarioContext } from '../../context/UsuarioContext';

export default function ProductList(){
    const [produtos,setProdutos] = useState();
    const [usuario,setUsuario] = useState();

    const {logado} = useContext(UsuarioContext)

    console.log(logado);

    useEffect(()=>{
        logarUsuario('joao123@gmail.com','joao123')
            .then(response => setUsuario(response))

        pegarProdutos()
            .then(response => setProdutos(response))
    },[])
    
    return(
        <section className='product-list'>
            <button onClick={()=> console.log(logado)}>aa</button>

            <p>{JSON.stringify(usuario)}</p>

        </section>
    )
}