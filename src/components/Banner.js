import '../styles/Banner.css'
import IMG from '../assets/IMG.png'

function Banner() {
    return (
        <div className="Banner">
            <p>Chez vous, partout et ailleurs</p>
            <img src={IMG} className='bg-Banner' alt='bg-banner' />
        </div>
    )
}

export default Banner