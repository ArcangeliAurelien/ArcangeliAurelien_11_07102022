import logo_Kasa from '../assets/logo_Kasa.png'
import '../styles/Header.css'

function Header() {
    return (
        <div className='Header'>
            <img src={logo_Kasa} className="App-logo" alt="logo" />
            <div className='Nav'>
                <a href='...'>Accueil</a>
                <a href='...'>A Propos</a>  
            </div> 
        </div>
    )
}

export default Header