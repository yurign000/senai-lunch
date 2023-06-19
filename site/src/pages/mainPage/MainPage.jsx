import './mainPage.css'
import logo_senai from '../../assets/logo-senai.png'
import plate from '../../assets/plate.ico'

export default function MainPage(){
    return (
        <section className='main-page'>

            <header>
                <img src={logo_senai} alt="logo do senai" />
            </header>
            <h1>LUNCH</h1>
            <figure>
                <img src={plate} alt="" />
            </figure>
            <a href='/product-list'>Entrar</a>
            
        </section>
    )
}