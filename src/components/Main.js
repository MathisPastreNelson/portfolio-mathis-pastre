import React from "react";
import { useState } from "react";

import QuiSuisJe from "./QuiSuisJe";
import MesServices from "./MesServices";
import Presentation from "./Presentation";
import MesProjets from "./MesProjets";
import ContactezMoi from "./ContactezMoi";

export default function Main() {
  const [component, setComponent] = useState(1);

  const page1 = () => {
    setComponent(1);
  };
  const page2 = () => {
    setComponent(2);
  };
  const page3 = () => {
    setComponent(3);
  };
  const page4 = () => {
    setComponent(4);
  };
  const page5 = () => {
    setComponent(5);
  };
  return (
    <div className="main_container">
      <nav className="navButton">
        <button
          className={`buttonSwitchComponent ${component === 1 ? "active" : ""}`}
          onClick={page1}>
          Qui suis-je ?
        </button>
        <button
          className={`buttonSwitchComponent ${component === 2 ? "active" : ""}`}
          onClick={page2}>
          Mes services
        </button>
        <button
          className={`buttonSwitchComponent ${component === 3 ? "active" : ""}`}
          onClick={page3}>
          Compétences
        </button>
        <button
          className={`buttonSwitchComponent ${component === 4 ? "active" : ""}`}
          onClick={page4}>
          Mes projets
        </button>
        <button
          className={`buttonSwitchComponent ${component === 5 ? "active" : ""}`}
          onClick={page5}>
          Contactez moi
        </button>
      </nav>

      <div>
        {component === 1 && (
          <QuiSuisJe component={component} setComponent={setComponent} />
        )}
      </div>
      <div>
        {component === 2 && (
          <MesServices component={component} setComponent={setComponent} />
        )}
      </div>
      <div>
        {component === 3 && (
          <Presentation component={component} setComponent={setComponent} />
        )}
      </div>
      <div>
        {component === 4 && (
          <MesProjets component={component} setComponent={setComponent} />
        )}
      </div>
      <div>
        {component === 5 && (
          <ContactezMoi component={component} setComponent={setComponent} />
        )}
      </div>
    </div>
  );
}
