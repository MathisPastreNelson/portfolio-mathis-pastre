import React, { useState } from "react";
import { projects } from "../assets/projects"; // importer une liste de projets
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

export default function MesProjets() {
  const [index, setIndex] = useState(0); // initialiser l'index à 0
  const project = projects[index]; // récupérer le projet correspondant à l'index actuel
  const [hideProject, setHideProject] = useState(false); // initialiser l'état pour cacher le projet sortant

  function handlePrev() {
    setHideProject(true); // cacher le projet sortant
    setTimeout(() => {
      setIndex((index - 1 + projects.length) % projects.length); // passer au projet précédent
      setHideProject(false); // afficher le nouveau projet
      document.querySelector(".carousel_portfolio").classList.add("reverse"); // ajouter la classe reverse pour l'animation de translation inverse
    }, 500); // délai de 500ms pour laisser le temps à l'animation de se terminer
  }

  function handleNext() {
    setHideProject(true); // cacher le projet sortant
    setTimeout(() => {
      setIndex((index + 1) % projects.length); // passer au projet suivant
      setHideProject(false); // afficher le nouveau projet
      document.querySelector(".carousel_portfolio").classList.remove("reverse"); // supprimer la classe reverse pour l'animation de translation normale
    }, 500); // délai de 500ms pour laisser le temps à l'animation de se terminer
  }

  return (
    <section className="present">
      <div className="title bg2">
        <div>
          <h2>Mes projets</h2>
          <h2>Une partie des projets sur lesquels j'ai travaillé</h2>
        </div>
      </div>
      <div className="book_container bg2 flexCenter">
        <div className="projectButton_BeforeNext_Box">
          <button className="projectButton_BeforeNext" onClick={handlePrev}>
            <FaArrowCircleLeft />
          </button>
          <button className="projectButton_BeforeNext" onClick={handleNext}>
            <FaArrowCircleRight />
          </button>
        </div>
        <div className={`carousel_portfolio ${hideProject ? "hide" : ""}`}>
          <div className="portefolio_article">
            <p className="projectOrderInfo">
              Projet : {index + 1} sur {projects.length}
            </p>
            <p className="projectDateInfo">
              Finalisation du projet le : {project.date}
            </p>
            <img className="imgPortFolio" src={project.image} alt="" />
            <h2 className="projectTitle">{project.name}</h2>
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
        </div>
      </div>
    </section>
  );
}
