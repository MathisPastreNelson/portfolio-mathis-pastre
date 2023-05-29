import React from "react";
import moiPeinture from "../assets/moisansfond2.png";

import {
  MobileOutlined,
  RiseOutlined,
  LoadingOutlined,
  DropboxOutlined,
  CodeOutlined,
} from "@ant-design/icons";

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

import figmaIcon from "../assets/icons/figma.png";
import mongodbIcon from "../assets/icons/mongoDB.png";

export default function QuiSuisJe() {
  return (
    <section className="present">
      <div className="title bg1">
        <div>
          <h2>Qui suis-je ?</h2>
          <h2>Voici un résumé de mon parcours</h2>
        </div>
      </div>
      <div className="who_container flexCenterNoColumn bg1">
        <div className="describe_container">
          <div className="describe_box animText">
            <p className="bdInfo">
              Développeur web passionné et motivé, je cherche à intégrer une
              entreprise et contribuer à des projets innovants. Dans le cadre de
              ma formation, j'ai réalisé de nombreux projets professionnels pour
              développer mes "hard skills" et renforcer mes connaissances dans
              le domaine de la création web.
            </p>
          </div>

          <img className="photoOfMeImg" src={moiPeinture} alt="Moi" />

          <div className="describe_box animText">
            <p className="bdInfo">
              Cette expérience m'a permis d'acquérir une solide expertise et de
              mettre en pratique les concepts et les méthodologies que j'ai
              appris au cours de ma formation. Je continue de progresser dans ce
              domaine en travaillant sur des projets personnels qui me
              permettent de mettre en pratique mes compétences et d'acquérir de
              nouvelles connaissances.
            </p>
          </div>
        </div>
      </div>
      {/* test */}

      <div className="interTitle">
        <h2>Mes services / Mes Compétences</h2>
      </div>

      <div className="skillsBox bg1">
        <div className="skillBox_Container1">
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
              Affichage sémantique des informations, des pages propres pour un
              référencement optimal.
            </p>
          </div>
          <div className="titleArticle anim5">
            <h3>
              <MobileOutlined /> Responsive design
            </h3>
            <p>Compatible tous supports, tablette & application mobile.</p>
          </div>
        </div>

        <div className="skillBox_Container2">
          <div>
            <h3 className="titleOfSkills">Languages</h3>
            <div className="icons_container_lineDisplay">
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
              <div className="iconAnimation iconBloc">
                <FaPhp className="skillIcons phpIcon bgIcon" />
                <div className="tooltip">PHP</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="titleOfSkills">Frameworks/Bibliothèques</h3>
            <div className="icons_container_lineDisplay">
              <div className="iconAnimation iconBloc">
                <FaReact className="skillIcons reactIcon bgIcon" />
                <div className="tooltip">React</div>
              </div>
              <div className="iconAnimation iconBloc">
                <FaNode className="skillIcons nodejsIcon bgIcon" />
                <div className="tooltip">NodeJS</div>
              </div>
              <div className="iconAnimation iconBloc">
                <FaBootstrap className="skillIcons bsIcon bgIcon" />
                <div className="tooltip">Bootstrap</div>
              </div>
              <div className="iconAnimation iconBloc">
                <FaSass className="skillIcons sassIcon bgIcon" />
                <div className="tooltip">Sass</div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="titleOfSkills">Outils</h3>
            <div className="icons_container_lineDisplay">
              <div className="iconAnimation iconBloc">
                <FaNetworkWired className="apiIcon wpIcon bgIcon" />
                <div className="tooltip">API</div>
              </div>
              <div className="iconAnimation iconBloc">
                <img
                  className="figmaIcon mongodbIcon bgIcon"
                  src={mongodbIcon}
                  alt=""
                />
                <div className="tooltip">MongoDB</div>
              </div>
              <div className="iconAnimation iconBloc">
                <img
                  className="figmaIcon wpIcon bgIcon"
                  src={figmaIcon}
                  alt=""
                />
                <div className="tooltip">FIGMA</div>
              </div>
              <div className="iconAnimation iconBloc">
                <FaWordpress className="skillIcons wpIcon bgIcon" />
                <div className="tooltip">WordPress</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
