import React from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'antd';
import { MobileOutlined, RiseOutlined, LoadingOutlined, DropboxOutlined, CodeOutlined } from '@ant-design/icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faWonSign } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    const [autoplay, setAutoplay] = useState(true);
    return (
        <div className='main_container'>
            <Carousel autoplay={autoplay}>
                <div>
                    <section className="present">
                        <div className="title">
                            <div>
                                <h2> Mes services ?</h2>
                                <h2>Des prestations adaptées à vos besoins</h2>
                            </div>
                        </div>

                        <div className="article">
                            <div>
                                <h3>
                                    <DropboxOutlined /> Intégration web
                                </h3>
                                <p>Des intégrations HTML / CSS / JAVASCRIPT
                                    respectueuses des standards du Web.</p>
                            </div>
                            <div>
                                <h3>
                                    <CodeOutlined /> Développement sur mesure </h3>
                                <p>
                                    Des sites web développés sur mesure pour répondre aux besoins spécifiques de chaque client.
                                </p>
                            </div>
                            <div>
                                <h3>
                                    <LoadingOutlined /> Dynamisme des pages
                                </h3>
                                <p>Des animations de contenu non intrusives pour embellir votre projet.</p>
                            </div>
                            <div>
                                <h3>
                                    <RiseOutlined /> Référencement naturel
                                </h3>
                                <p>Affichage sémantique des informations,
                                    des pages propres pour un référencement optimal.</p>
                            </div>
                            <div>
                                <h3>
                                    <MobileOutlined /> Responsive design
                                </h3>
                                <p>
                                    Compatible tous supports, tablette & application mobile.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 2</h1>
                </div>
                <div>
                    <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 3</h1>
                </div>
                <div>
                    <h1 style={{ color: "white", lineHeight: "300px" }}>Slide 4</h1>
                </div>

            </Carousel >
            <button className='buttonPlay' onClick={() => setAutoplay(!autoplay)}>
                Défilement automatique  {autoplay ? "Off" : "On"}
            </button>
        </div>
    )

}