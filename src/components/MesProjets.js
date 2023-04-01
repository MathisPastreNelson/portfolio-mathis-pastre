import React from "react";
import { useState } from "react";

import bookio from "../assets/bookio.png";
import ohmyfood from "../assets/ohmyfood.png";
import lapanthere from "../assets/lapanthere.png";
import kanap from "../assets/Kanap.png";
import piiiquante from "../assets/piiiquante.png";
import kasa from "../assets/Kasa.png";
import omega from "../assets/Omega.png";
import mairie from "../assets/Mairie.png";
import Cinemathis from "../assets/Cinemathis.png";

import { Carousel } from "antd";

export default function MesProjets() {
  const autoplay = useState(true);
  return (
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
              <img className="imgPortFolio" src={Cinemathis} alt="" />
              <h2>CinéMathis</h2>
              <p>Site de recherche de films en react avec l'API TMDB.</p>
              <a
                href="https://mathispastrenelson.github.io/my-api-project/"
                className="visitButton">
                Visiter le site
              </a>
              <br /> <br />
            </div>
            <div className="portefolio_article">
              <img className="imgPortFolio" src={mairie} alt="" />
              <h2>Mairie Neuilly-le-Brignon</h2>
              <p>Refonte d'un site de mairie avec WordPress/Elementor.</p>
              <a
                href="https://mathispastrenelson.github.io/site-mairie/"
                className="visitButton">
                Visiter le site
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
              <img className="imgPortFolio" src={lapanthere} alt="" />
              <h2>La panthère</h2>
              <p>Création d'un site d'agence de développeur/designer web.</p>
              <a
                href="https://mathispastrenelson.github.io/Projet-4-OCR/"
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
  );
}
