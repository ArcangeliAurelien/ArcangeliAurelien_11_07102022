import React, {useState} from "react";
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

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

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