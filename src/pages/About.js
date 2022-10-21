import React from "react";
import '../styles/App.css';
import '../styles/About.css';
import IMG2 from '../assets/IMG2.png';
import Header from '../components/Header';
import Footer from '../components/Footer';
import arrowDown from '../assets/arrowDown.svg'

function About() {
    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [open4, setOpen4] = React.useState(false)

    const [rotateChevron, setRotateChevron] = React.useState(false)
    const [rotateChevron2, setRotateChevron2] = React.useState(false)
    const [rotateChevron3, setRotateChevron3] = React.useState(false)
    const [rotateChevron4, setRotateChevron4] = React.useState(false)

    const rotate = rotateChevron ? "rotateX(180deg)" : "rotateX(0)"
    const rotate2 = rotateChevron2 ? "rotateX(180deg)" : "rotateX(0)"
    const rotate3 = rotateChevron3 ? "rotateX(180deg)" : "rotateX(0)"
    const rotate4 = rotateChevron4 ? "rotateX(180deg)" : "rotateX(0)"

    const handleOpen = () => {
        setOpen(!open)
        setRotateChevron(!rotateChevron)
    }
    const handleOpen2 = () => {
        setOpen2(!open2)
        setRotateChevron2(!rotateChevron2)
    }
    const handleOpen3 = () => {
        setOpen3(!open3)
        setRotateChevron3(!rotateChevron3)
    }
    const handleOpen4 = () => {
        setOpen4(!open4)
        setRotateChevron4(!rotateChevron4)
    }

    return <div>
        <Header />
        <div className="BannerAbout">
            <img src={IMG2} className='imgAbout' alt='imgAbout' />
            <div className="shadow"></div>
        </div>

        <div className="bodyAbout">
            
            <div className='itemAbout'>
                <div className="bloc">
                    <div className='dropdownAbout' onClick={handleOpen}>
                        <div className='sous-titre'>Fiabilité</div>
                        <img className='arrow' style={{ transform: rotate, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                    </div>
                    {open ? (
                        <div className='bloc-text'>
                            <div className='paragraphe'>
                                Les annonces postées sur Kasa garantissent une fiabilité totale.
                                Les photos sont conformes aux logements,
                                et toutes les informations sont régulièrement vérifiées
                                par nos équipes.
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="bloc">
                    <div className='dropdownAbout' onClick={handleOpen2}>
                        <div className='sous-titre'>Respect</div>
                        <img className='arrow' style={{ transform: rotate2, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                    </div>
                    {open2 ? (
                        <div className='bloc-text'>
                            <div className='paragraphe'>
                                La bienveillance fait partie des valeurs
                                fondatrices de Kasa. Tout comportement
                                discriminatoire ou de perturbation du voisinage
                                entraînera une exclusion de notre plateforme.
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="bloc">
                    <div className='dropdownAbout' onClick={handleOpen3}>
                        <div className='sous-titre'>Service</div>
                        <img className='arrow' style={{ transform: rotate3, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                    </div>
                    {open3 ? (
                        <div className='bloc-text'>
                            <div className='paragraphe'>
                                Nos équipes se tiennent à votre disposition
                                pour vous fournir une expérience parfaite.
                                N'hésitez pas à nous contacter si vous avez
                                la moindre question.
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="bloc">
                    <div className='dropdownAbout' onClick={handleOpen4}>
                        <div className='sous-titre'>Sécurité</div>
                        <img className='arrow' style={{ transform: rotate4, transition: "all 0.2s linear" }} src={arrowDown} alt='arrow' />
                    </div>
                    {open4 ? (
                        <div className='bloc-text'>
                            <div className='paragraphe'>
                                La sécurité est la priorité de Kasa.
                                Aussi bien pour nos hôtes que pour les voyageurs,
                                chaque logement correspond aux critères de
                                sécurité établis par nos services.
                                En laissant une note aussi bien à l'hôte
                                qu'au locataire, cela permet à nos équipes de
                                vérifier que les standards sont bien respectés.
                                Nous organisons également des ateliers sur la
                                sécurité domestique pour nos hôtes.
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
        <Footer />
    </div>

}

export default About;