import React, { useState } from "react";
import { projects } from "../assets/projects"; // importer une liste de projets

export default function MesProjets() {
  const [index, setIndex] = useState(0); // initialiser l'index à 0
  const project = projects[index]; // récupérer le projet correspondant à l'index actuel

  function handlePrev() {
    setIndex((index - 1 + projects.length) % projects.length); // passer au projet précédent
  }

  function handleNext() {
    setIndex((index + 1) % projects.length); // passer au projet suivant
  }

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
          <div className="portefolio_article">
            <img className="imgPortFolio" src={project.image} alt="" />
            <div className="describeBox">
              <h2>{project.title}</h2>
              <p className="DescribeOfProject">Description : </p>
              <p className="DescribeOfProject_text">{project.description}</p>
            </div>
            <div className="listTechnology_box">
              <p className="DescribeOfProject">Outils/Framework : </p>
              {project.technologies.map((technology) => (
                <li className="listTechnology" key={technology}>
                  {technology}
                </li>
              ))}
            </div>
            <a href={project.link} className="visitButton">
              Visiter le projet
            </a>
          </div>
          <div>
            <p className="projectOrderInfo">
              Projet : {index + 1} sur {projects.length}
            </p>
            <button className="projectButton_BeforeNext" onClick={handlePrev}>
              Précédent
            </button>
            <button className="projectButton_BeforeNext" onClick={handleNext}>
              Suivant
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
