import React from "react";
import logo_Kasa from '../assets/logo_Kasa.png'
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='Header'>
            <img src={logo_Kasa} className="App-logo" alt="logo" />
            <div className='Nav'>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink to='/about'>A Propos</NavLink> 
            </div> 
        </div>
    )
}

export default Header