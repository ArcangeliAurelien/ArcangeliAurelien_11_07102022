import React from "react";
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { LogementList } from '../datas/LogementList'
import "../styles/Carousel.css"

function Carousel() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const images = lgt.pictures

    return (
        <div>
            <Slide className="carousel">
                <div>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt="img-lgt" />
                    ))}
                </div>
            </Slide>
        </div>
    )
}

export default Carousel