import React from 'react';
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import Rating from '../components/Rating';
import DropdownItem from '../components/Dropdown';
import Footer from '../components/Footer';
import "../styles/LogementPage.css"
import ErrorPage from './ErrorPage';

function LogementPage() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    if(lgt === undefined) {return <ErrorPage />}

    const host = lgt.host
    const itemHost = <div className='profil'>
        <p className='nameProfil'>{host.name}</p>
        <img className='imgProfil' src={host.picture} alt='image_profil' />
    </div>

    const tags = lgt.tags

    return (
        <div>
            <Header />
            <div className='body'>
                <Carousel />
                <div className='description-lgt'>
                    <div className='item1'>
                        <div>
                            <div className='title'>{lgt.title}</div>
                            <div className='location'>{lgt.location}</div>
                        </div>
                        <div className='tags'>{
                            tags.map((tag, index) => (<div key={index} className='tag'>{tag}</div>))
                        }
                        </div>
                    </div>
                    <div className='item2'>
                        {itemHost}
                        <Rating />
                    </div>
                </div>
                <DropdownItem />
            </div>
            <Footer />
        </div>
    )
}

export default LogementPage