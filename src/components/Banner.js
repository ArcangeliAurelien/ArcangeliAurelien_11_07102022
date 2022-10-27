import React from "react";
import '../styles/Banner.css'
import IMG from '../assets/IMG.png'

function Banner() {
    return (
        <div className="Banner">
            <img src={IMG} alt='bg-banner' />
            <p className="text-banner">Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner