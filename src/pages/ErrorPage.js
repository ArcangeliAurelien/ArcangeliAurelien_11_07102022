import React from "react";
import { Link } from "react-router-dom";
import '../styles/App.css';
import '../styles/ErrorPage.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function ErrorPage() {
    return <div>
        <Header />
        <div className="bodyError">
            <div className="error">404</div>
            <div className="textError">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/" className="link">Retourner sur la page d'accueil</Link>
        </div>
        <Footer />
    </div>

}

export default ErrorPage;