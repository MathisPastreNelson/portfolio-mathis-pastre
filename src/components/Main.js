import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faWonSign } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='main_container'>
            <Slider {...settings}>
                <div className='card_container'>
                    <section className="present">
                        <div className="title">
                            <h2> Mes services ?</h2>
                            <h2>Des prestations adaptées à vos besoins</h2>
                        </div>
                        <div className="article">
                            <div>
                                <h3>Intégration web</h3>
                                <p>Des intégrations HTML / CSS
                                    respectueuses des standards du Web.</p>
                            </div>
                            <div>
                                <h3>Dynamisme des pages</h3>
                                <p>Des animations de contenu non intrusives pour embellir votre projet.</p>
                            </div>
                            <div>
                                <h3>Référencement naturel</h3>
                                <p>Affichage sémantique des informations,
                                    des pages propres pour un référencement optimal.</p>
                            </div>
                            <div>
                                <h3>
                                    Responsive design
                                </h3>
                                <p>
                                    Compatible tous supports, tablette & application mobile.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>


                <div className='card_container'>
                    <h3>2</h3>
                </div>
                <div className='card_container'>
                    <h3>3</h3>
                </div>
                <div className='card_container'>
                    <h3>4</h3>
                </div>
                <div className='card_container'>
                    <h3>5</h3>
                </div>
                <div className='card_container'>
                    <h3>6</h3>
                </div>
            </Slider >
        </div >
    );
}
