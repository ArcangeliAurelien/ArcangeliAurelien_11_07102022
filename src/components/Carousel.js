import React, {useState} from "react";
import { useParams } from 'react-router-dom';
import { LogementList } from '../datas/LogementList'
import "../styles/Carousel.css"
import { SlideImage, StyledSlider } from "../styles/SlideImage"
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Carousel() {
    const { id } = useParams()
    const lgt = LogementList.find((ele) => ele.id === id)

    const images = lgt.pictures

    const [current, setCurrent] = useState(0)
    const length = images.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    return (
        <StyledSlider>
            <FaChevronLeft
                className="leftArrow"
                onClick={prevSlide}
            />
            <FaChevronRight 
                className="rightArrow"
                onClick={nextSlide}
            />
            {images.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === current && (
                            <SlideImage src={slide} alt="img-lgt" />
                        )}
                    </div>
                )
            })}
        </StyledSlider>
    )
}

export default Carousel