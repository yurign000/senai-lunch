import './productList.css'
import { getProdutos } from '../../apiConnectProdutos'
import { logarUsuario } from '../../apiConnectUsuarios';
import { useEffect,useState } from 'react'

export default function ProductList(){
    const [produtos,setProdutos] = useState();
    const [usuario,setUsuario] = useState();
    
    useEffect(()=>{
        logarUsuario('joao123@gmail.com','joao123')
            .then(response => setUsuario(response))

        getProdutos()
            .then(response => setProdutos(response))
    },[])
    
    return(
        <section className='product-list'>

            <p>{JSON.stringify(usuario)}</p>

        </section>
    )
}