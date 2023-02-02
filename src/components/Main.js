import React from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'antd';
import { FloatButton } from 'antd';
import { FaJs, FaPhp, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaWordpress, FaAngular } from 'react-icons/fa';
import { MobileOutlined, RiseOutlined, LoadingOutlined, DropboxOutlined, CodeOutlined, CaretRightOutlined, PauseOutlined, Html5Outlined } from '@ant-design/icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faWonSign } from '@fortawesome/free-solid-svg-icons'

export default function Main() {
    const [autoplay, setAutoplay] = useState(true);
    return (
        <div className='main_container'>
            <Carousel autoplay={autoplay}>
                <div>
                    <section className="present">
                        <div className="title bgBanner1">
                            <div>
                                <h2> Mes services ?</h2>
                                <h2>Des prestations adaptées à vos besoins</h2>
                            </div>
                        </div>

                        <div className="article services_bg">
                            <div className="titleArticle">
                                <h3>
                                    <DropboxOutlined /> Intégration web
                                </h3>
                                <p>Des intégrations HTML / CSS / JAVASCRIPT
                                    respectueuses des standards du Web.</p>
                            </div>
                            <div className="titleArticle">
                                <h3>
                                    <CodeOutlined /> Développement sur mesure </h3>
                                <p>
                                    Des sites web développés sur mesure pour répondre aux besoins spécifiques de chaque client.
                                </p>
                            </div>
                            <div className="titleArticle">
                                <h3>
                                    <LoadingOutlined /> Dynamisme des pages
                                </h3>
                                <p>Des animations de contenu non intrusives pour embellir votre projet.</p>
                            </div>
                            <div className="titleArticle">
                                <h3>
                                    <RiseOutlined /> Référencement naturel
                                </h3>
                                <p>Affichage sémantique des informations,
                                    des pages propres pour un référencement optimal.</p>
                            </div>
                            <div className="titleArticle">
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
                {/* Slide 2 */}
                <div>
                    <section className="present">
                        <div className="title bgBanner2">
                            <div>
                                <h2>Mes compétences</h2>
                                <h2>Mes connaissances et acquis professionnels</h2>
                            </div>
                        </div>

                        <div className="article bgBackground2">
                            <div className='icons_container'>
                                <div>
                                    <Html5Outlined className="skillIcons htmlIcon bgIcon" />
                                    <FaCss3Alt className="skillIcons cssIcon bgIcon" />
                                    <FaJs className="skillIcons jsIcon bgIcon" />
                                    <FaPhp className="skillIcons phpIcon bgIcon" />
                                </div>
                                <div>
                                    <FaReact className="skillIcons reactIcon bgIcon" />
                                </div>
                                <div>
                                    <FaAngular className="skillIcons angularIcon bgIcon" />
                                    <FaSass className="skillIcons sassIcon bgIcon" />
                                    <FaBootstrap className="skillIcons bsIcon bgIcon" />
                                    <FaWordpress className="skillIcons wpIcon bgIcon" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Carousel >
            {
                autoplay === true ?
                    <FloatButton icon={<PauseOutlined />} type="primary" onClick={() => setAutoplay(!autoplay)} /> :
                    <FloatButton icon={<CaretRightOutlined />} type="primary" onClick={() => setAutoplay(!autoplay)} />
            }

        </div>
    )

}
