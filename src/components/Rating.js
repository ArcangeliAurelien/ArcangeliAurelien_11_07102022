import React from 'react';
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import { FaStar } from 'react-icons/fa'
import "../styles/LogementPage.css"

function Rating() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const ratings = [lgt.rating]
    const starArray = [...Array(5).keys()].map(i => i + 1);

    const Rating = ({ rating }) =>
        starArray.map(i => (
            <FaStar
                key={i}
                className="stars"
                color={rating >= i ? '#FF6060' : '#E3E3E3'}
            />
        ));

    return (
        <div>
            {ratings.map((rating, i) => (
                <div key={i}>
                    <Rating rating={rating} />
                </div>
            ))}
        </div>
    )
}

export default Rating