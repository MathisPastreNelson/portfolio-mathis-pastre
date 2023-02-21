import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import { FloatButton } from "antd";
import {
  FaJs,
  FaPhp,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaHtml5,
  FaNetworkWired,
  FaNode,
} from "react-icons/fa";
import {
  MobileOutlined,
  RiseOutlined,
  LoadingOutlined,
  DropboxOutlined,
  CodeOutlined,
  CaretRightOutlined,
  PauseOutlined,
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

import figmaIcon from "../assets/icons/figma.png";
import mongodbIcon from "../assets/icons/mongoDB.png";

import bookio from "../assets/bookio.png";
import ohmyfood from "../assets/ohmyfood.png";
import lapanthere from "../assets/lapanthere.png";
import kanap from "../assets/Kanap.png";
import piiiquante from "../assets/piiiquante.png";
import kasa from "../assets/Kasa.png";
import omega from "../assets/Omega.png";
import moiPeinture from "../assets/moisansfond2.png";

export default function Main() {
  const [autoplay, setAutoplay] = useState(true);

  return (
    <div className="main_container">
      <Carousel
        autoplay={autoplay}
        speed="800"
        autoplaySpeed="120"
        keyBoardControl={true}
        dotsClass="button__bar">
        <div>
          <section className="present">
            <div className="title bgBanner0">
              <div>
                <h2>Qui suis-je ?</h2>
                <h2>Voici un résumé de mon parcours</h2>
              </div>
            </div>
            <div className="who_container flexCenterNoColumn bgSpace">
              <div className="describe_box animText">
                <p>
                  Développeur web passionné et motivé, je cherche à intégrer une
                  entreprise et contribuer à des projets innovants. Dans le
                  cadre de ma formation, j'ai réalisé de nombreux projets
                  professionnels pour développer mes "hard skills" et renforcer
                  mes connaissances dans le domaine de la création web.
                </p>
              </div>
              <p className="helpUser">Touchez ici</p>
              <img className="photoOfMeImg" src={moiPeinture} alt="Moi" />
              <p className="helpUser">Pour dévoiler</p>
              <div className="describe_box animText">
                <p>
                  Cette expérience m'a permis d'acquérir une solide expertise et
                  de mettre en pratique les concepts et les méthodologies que
                  j'ai appris au cours de ma formation. Je continue de
                  progresser dans ce domaine en travaillant sur des projets
                  personnels qui me permettent de mettre en pratique mes
                  compétences et d'acquérir de nouvelles connaissances.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section className="present">
            <div className="title bgBanner1">
              <div>
                <h2> Mes services</h2>
                <h2>Des prestations adaptées à vos besoins</h2>
              </div>
            </div>
            <div className="article services_bg flexCenter">
              <div className="titleArticle anim1">
                <h3>
                  <DropboxOutlined /> Intégration web
                </h3>
                <p>
                  Des intégrations HTML / CSS / JAVASCRIPT respectueuses des
                  standards du Web.
                </p>
              </div>
              <div className="titleArticle anim2">
                <h3>
                  <CodeOutlined /> Développement sur mesure{" "}
                </h3>
                <p>
                  Des sites web développés sur mesure pour répondre aux besoins
                  spécifiques de chaque client.
                </p>
              </div>
              <div className="titleArticle anim3">
                <h3>
                  <LoadingOutlined /> Dynamisme des pages
                </h3>
                <p>
                  Des animations de contenu non intrusives pour embellir votre
                  projet.
                </p>
              </div>
              <div className="titleArticle anim4">
                <h3>
                  <RiseOutlined /> Référencement naturel
                </h3>
                <p>
                  Affichage sémantique des informations, des pages propres pour
                  un référencement optimal.
                </p>
              </div>
              <div className="titleArticle anim5">
                <h3>
                  <MobileOutlined /> Responsive design
                </h3>
                <p>Compatible tous supports, tablette & application mobile.</p>
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
              <div className="icons_container">
                <div>
                  <div className="iconAnimation iconBloc">
                    <FaHtml5 className="skillIcons htmlIcon bgIcon" />
                    <div className="tooltip">HTML</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaCss3Alt className="skillIcons cssIcon bgIcon" />
                    <div className="tooltip">CSS</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaJs className="skillIcons jsIcon bgIcon" />
                    <div className="tooltip">Javascript</div>
                  </div>
                </div>
                <div>
                  <div className="iconAnimation iconBloc">
                    <FaPhp className="skillIcons phpIcon bgIcon" />
                    <div className="tooltip">PHP</div>
                  </div>

                  <div className="iconAnimation iconBloc">
                    <FaReact className="skillIcons reactIcon bgIcon" />
                    <div className="tooltip">React</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaSass className="skillIcons sassIcon bgIcon" />
                    <div className="tooltip">Sass</div>
                  </div>
                </div>
                <div>
                  <div className="iconAnimation iconBloc">
                    <FaBootstrap className="skillIcons bsIcon bgIcon" />
                    <div className="tooltip">Bootstrap</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaWordpress className="skillIcons wpIcon bgIcon" />
                    <div className="tooltip">WordPress</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <img
                      className="figmaIcon wpIcon bgIcon"
                      src={figmaIcon}
                      alt=""
                    />
                    <div className="tooltip">FIGMA</div>
                  </div>
                </div>
                <div>
                  <div className="iconAnimation iconBloc">
                    <img
                      className="figmaIcon mongodbIcon bgIcon"
                      src={mongodbIcon}
                      alt=""
                    />
                    <div className="tooltip">MongoDB</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaNode className="skillIcons nodejsIcon bgIcon" />
                    <div className="tooltip">NodeJS</div>
                  </div>
                  <div className="iconAnimation iconBloc">
                    <FaNetworkWired className="apiIcon wpIcon bgIcon" />
                    <div className="tooltip">API</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Slide 3 */}
        <div>
          <section className="present">
            <div className="title bgBanner4">
              <div>
                <h2>Mes projets</h2>
                <h2>Une partie des projets sur lesquels j'ai travaillé</h2>
              </div>
            </div>
            <div className="book_container bgBackground4 flexCenter">
              <div className="carousel_portfolio">
                <Carousel
                  effect="fade"
                  autoplay={autoplay}
                  speed="800"
                  autoplaySpeed="30">
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={bookio} alt="" />
                    <h2>Bookio</h2>
                    <p>Création d'un site web d'hébergement pour vacance.</p>
                    <a
                      href="https://mathispastrenelson.github.io/Projet-2-OCR/"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={ohmyfood} alt="" />
                    <h2>Ohmyfood</h2>
                    <p>Création d'un site web de réservation de menu.</p>
                    <a
                      href="https://mathispastrenelson.github.io/Projet-3-OCR/"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={lapanthere} alt="" />
                    <h2>La panthère</h2>
                    <p>
                      Création d'un site d'agence de développeur/designer web.
                    </p>
                    <a
                      href="https://mathispastrenelson.github.io/Projet-4-OCR/"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={kanap} alt="" />
                    <h2>Kanap</h2>
                    <p>Intégration Front des données en JavaScript.</p>
                    <a
                      href="https://mathispastrenelson.github.io/Projet-5-OCR/front/html/index.html"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={piiiquante} alt="" />
                    <h2>Piiiquante</h2>
                    <p>Création d'une API rest avec nodeJS.</p>
                    <a
                      href="https://github.com/MathisPastreNelson/Projet-6-OCR"
                      className="visitButton">
                      Visiter le repository
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={kasa} alt="" />
                    <h2>Kasa</h2>
                    <p>Création d'un front avec React.</p>
                    <a
                      href="https://mathispastrenelson.github.io/projet-7-ocr/"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                  <div className="portefolio_article">
                    <img className="imgPortFolio" src={omega} alt="" />
                    <h2>Omega</h2>
                    <p>Création d'un RPG avec React.</p>
                    <a
                      href="https://role-playing-groubi.netlify.app/"
                      className="visitButton">
                      Visiter le site
                    </a>
                    <br /> <br />
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </div>
        {/* Slide 4 */}
        <div>
          <section className="present">
            <div className="title bgBanner3">
              <div>
                <h2>Me contacter</h2>
                <h2>Un projet de création web ?</h2>
              </div>
            </div>
            <div className="book_container bgBackground3 flexCenter">
              <a href="mailto:mathis.pastre@outlook.com">
                <MailOutlined />
                <h3>Email</h3>
              </a>
              <a href="https://www.linkedin.com/in/mathis-pastre/">
                <LinkedinOutlined />
                <h3>Linkdin</h3>
              </a>
              <a href="https://github.com/MathisPastreNelson">
                <GithubOutlined />
                <h3>Github</h3>
              </a>
            </div>
          </section>
        </div>
      </Carousel>
      {autoplay === true ? (
        <FloatButton
          icon={<PauseOutlined />}
          type="primary"
          onClick={() => setAutoplay(!autoplay)}
        />
      ) : (
        <FloatButton
          icon={<CaretRightOutlined />}
          type="primary"
          onClick={() => setAutoplay(!autoplay)}
        />
      )}
    </div>
  );
}
