import React from "react";
import '../styles/App.css';
import '../styles/LogementItem.css'
import '../styles/Body.css'
import { Link } from 'react-router-dom'
import { LogementList } from '../datas/LogementList'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import LogementPage from '../pages/LogementPage'

function Home() {
  return <div>
    <Header />
    <Banner />
    <div className="Container">
      <ul className='logement-list'>
        {LogementList.map(({ id, cover, title }) => (
          <li key={id} className="logement-item" onClick={() => LogementPage()}>
            <Link to={`/LogementPage/${id}`}>
              <img className="logement-item-cover" src={cover} alt={`${title} cover`} />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </div>

}

export default Home;