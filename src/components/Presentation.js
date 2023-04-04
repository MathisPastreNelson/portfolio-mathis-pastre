import React from "react";

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

export default function Presentation() {
  return (
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
