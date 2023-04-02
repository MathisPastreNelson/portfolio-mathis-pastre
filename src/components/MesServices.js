import React from "react";

import {
  MobileOutlined,
  RiseOutlined,
  LoadingOutlined,
  DropboxOutlined,
  CodeOutlined,
} from "@ant-design/icons";

export default function MesServices() {
  return (
    <section className="present ">
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
            Des intégrations HTML / CSS / JAVASCRIPT respectueuses des standards
            du Web.
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
            Des animations de contenu non intrusives pour embellir votre projet.
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
    </section>
  );
}
