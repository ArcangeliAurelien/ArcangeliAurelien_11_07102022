import React from 'react';
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import '../styles/Dropdown.css'
import arrowUp from '../assets/arrowUp.svg'

function Dropdown() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const equipements = lgt.equipments

    return (
        <div className='item3'>
            <div>
                <div className='dropdown'>
                    <div className='dropdown-value'>Description</div>
                    <img className='dropdown-value' src={arrowUp} alt='arrow' />
                </div>
                <div className='description'>
                    <div className='text'>{lgt.description}</div>
                </div>
            </div>
            <div>
                <div className='dropdown'>
                    <div className='dropdown-value'>Équipements</div>
                    <img className='dropdown-value' src={arrowUp} alt='arrow' />
                </div>
                <div className='equipement'>
                    <div className='text'>
                        {equipements.map((equipement) => (
                            <div>{equipement}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dropdown