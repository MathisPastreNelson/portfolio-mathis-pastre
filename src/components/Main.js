import React from 'react';
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'antd';
import { FloatButton } from 'antd';
import { FaJs, FaPhp, FaCss3Alt, FaReact, FaSass, FaBootstrap, FaWordpress, FaHtml5, FaNetworkWired } from 'react-icons/fa';
import { MobileOutlined, RiseOutlined, LoadingOutlined, DropboxOutlined, CodeOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons';

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

                        <div className="article services_bg flexCenter">
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

                                    <div className="iconAnimation">
                                        <FaHtml5 className="skillIcons htmlIcon bgIcon" />
                                        <div className="tooltip">HTML</div>
                                    </div>
                                    <div className="iconAnimation">
                                        <FaCss3Alt className="skillIcons cssIcon bgIcon" />
                                        <div className="tooltip">CSS</div>
                                    </div>
                                    <div className="iconAnimation">
                                        <FaJs className="skillIcons jsIcon bgIcon" />
                                        <div className="tooltip">JS</div>
                                    </div>
                                </div>
                                <div>

                                    <div className="iconAnimation">
                                        <FaPhp className="skillIcons phpIcon bgIcon" />
                                        <div className="tooltip">PHP</div>
                                    </div>

                                    <div className="iconAnimation">
                                        <FaReact className="skillIcons reactIcon bgIcon" />
                                        <div className="tooltip">React</div>
                                    </div>
                                    <div className="iconAnimation">
                                        <FaSass className="skillIcons sassIcon bgIcon" />
                                        <div className="tooltip">Sass</div>
                                    </div>
                                </div>
                                <div>

                                    <div className="iconAnimation">
                                        <FaBootstrap className="skillIcons bsIcon bgIcon" />
                                        <div className="tooltip">Bootstrap</div>
                                    </div>
                                    <div className="iconAnimation">
                                        <FaWordpress className="skillIcons wpIcon bgIcon" />
                                        <div className="tooltip">WordPress</div>
                                    </div>
                                    <div className="iconAnimation">
                                        <FaNetworkWired className="apiIcon wpIcon bgIcon" />
                                        <div className="tooltip">API</div>
                                    </div>
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

        </div >
    )

}
