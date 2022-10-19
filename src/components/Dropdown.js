import React from 'react';
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import '../styles/Dropdown.css'
import arrowUp from '../assets/arrowUp.svg'

function DropdownItem() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const equipements = lgt.equipments

    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleOpen2 = () => {
        setOpen2(!open2)
    }

    return (
        <div className='item3'>
            <div>
                <div className='dropdown' onClick={handleOpen}>
                    <div className='dropdown-value'>Description</div>
                    <img className='dropdown-value' src={arrowUp} alt='arrow' />
                </div>
                {open ? (
                    <div className='description'>
                        <div className='text'>{lgt.description}</div>
                    </div>
                ) : null}
            </div>
            <div>
                <div className='dropdown' onClick={handleOpen2}>
                    <div className='dropdown-value'>Équipements</div>
                    <img className='dropdown-value' src={arrowUp} alt='arrow' />
                </div>
                {open2 ? (
                    <div className='equipement'>
                        <div className='text'>
                            {equipements.map((equipement) => (
                                <div>{equipement}</div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
        
    )
}

export default DropdownItem