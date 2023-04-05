import React from "react";
import moiPeinture from "../assets/moisansfond2.png";

export default function QuiSuisJe() {
  const scrollHandler = () => {
    const element = document.querySelector(".who_container");
    const { top, height } = element.getBoundingClientRect();
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    const y = top + offset + height / 2;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="present">
      <div className="title bg1">
        <div>
          <h2>Qui suis-je ?</h2>
          <h2>Voici un résumé de mon parcours</h2>
        </div>
      </div>
      <div
        className="who_container flexCenterNoColumn bg1"
        onMouseOver={scrollHandler}
        onClick={scrollHandler}>
        <div className="describe_box animText">
          <p className="bdInfo">
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
          <p className="bdInfo">
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
