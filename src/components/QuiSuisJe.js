import React from "react";
import moiPeinture from "../assets/moisansfond2.png";

export default function QuiSuisJe() {
  return (
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
            entreprise et contribuer à des projets innovants. Dans le cadre de
            ma formation, j'ai réalisé de nombreux projets professionnels pour
            développer mes "hard skills" et renforcer mes connaissances dans le
            domaine de la création web.
          </p>
        </div>
        <p className="helpUser">Touchez ici</p>
        <img className="photoOfMeImg" src={moiPeinture} alt="Moi" />
        <p className="helpUser">Pour dévoiler</p>
        <div className="describe_box animText">
          <p>
            Cette expérience m'a permis d'acquérir une solide expertise et de
            mettre en pratique les concepts et les méthodologies que j'ai appris
            au cours de ma formation. Je continue de progresser dans ce domaine
            en travaillant sur des projets personnels qui me permettent de
            mettre en pratique mes compétences et d'acquérir de nouvelles
            connaissances.
          </p>
        </div>
      </div>
    </section>
  );
}
