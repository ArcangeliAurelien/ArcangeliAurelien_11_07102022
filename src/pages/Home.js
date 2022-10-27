import React from "react";
import '../styles/App.css';
import '../styles/Body.css'
import { Link } from 'react-router-dom'
import { LogementList } from '../datas/LogementList'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Home() {
  return <div>
    <Header />
    <Banner />
    <div className="Container">
      <ul className='logement-list'>
        {LogementList.map(({ id, cover, title }) => (
          <li key={id} className="logement-item">
            <Link to={`/LogementPage/${id}`} className='lien-lgt'>
              <p>{title}</p>
              <img className="logement-item-cover" src={cover} alt={`${title} cover`} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </div>

}

export default Home;