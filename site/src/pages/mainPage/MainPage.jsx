import './mainPage.css'
import logo_senai from '../../assets/logo-senai.png'
import plate from '../../assets/plate.ico'
import { useContext } from 'react'
import { UsuarioContext } from '../../context/UsuarioContext'
import { useNavigate } from 'react-router-dom'

export default function MainPage(){
    const {logar, logado} = useContext(UsuarioContext);
    const navigate = useNavigate();

    console.log(logado);

    const handleLogin = async () => {
        logar();
        return navigate('/product-list')
    }
    
    return (
        <section className='main-page'>

            <header>
                <img src={logo_senai} alt="logo do senai" />
            </header>
            <h1>LUNCH</h1>
            <figure>
                <img src={plate} alt="" />
            </figure>
            <a onClick={() => handleLogin() }>Entrar</a>
            
        </section>
    )
}