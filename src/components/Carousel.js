import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import "../styles/Carousel.css"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Carousel() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const images = lgt.pictures

    const [current, setCurrent] = useState(0)
    const length = images.length
    const number = current + 1

    // Si une image alors les flèches disparaissent
    if (length === 1) {
        useEffect(() => {
            const el1 = document.querySelector(".leftArrow")
            const el2 = document.querySelector(".rightArrow")

            el1.style.visibility = "hidden"
            el2.style.visibility = "hidden"
        }, [])
    }

    // Passer à l'image suivante
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    // Passer à l'image précédente
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <div>
            <div className="StyledSlider">
                <div className="leftArrow">
                    <FaChevronLeft
                        onClick={prevSlide}
                    />
                </div>
                <div className="rightArrow">
                    <FaChevronRight
                        onClick={nextSlide}
                    />
                </div>
                <div className="number">{number} / {length}</div>

                {images.map((slide, index) => {
                    return (
                        <div key={index}>
                            {index === current && (
                                <img className="SlideImage" src={slide} alt="img-lgt" />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel