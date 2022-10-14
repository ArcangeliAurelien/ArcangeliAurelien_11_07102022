import React from "react";
import '../styles/LogementItem.css'
import LogementPage from '../pages/LogementPage'
import { Link } from 'react-router-dom'

function LogementItem({ id, cover, title }) {    
    return (
        <li key={id} className="logement-item" onClick={() => LogementPage()}>
            <Link to={`/LogementPage/${id}`}>
                <img className="logement-item-cover" src={cover} alt={`${title} cover`} />
                <p>{title}</p>
            </Link>
        </li>
    )
}

export default LogementItem