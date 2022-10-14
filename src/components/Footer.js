import React from "react";
import logo_Kasa_Footer from '../assets/logo_Kasa_Footer.png'
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <img src={logo_Kasa_Footer} className="App_logo_footer" alt='logo_Footer' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer