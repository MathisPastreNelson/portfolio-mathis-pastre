import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "antd";
import { FloatButton } from "antd";

import QuiSuisJe from "./QuiSuisJe";
import MesServices from "./MesServices";
import Presentation from "./Presentation";
import MesProjets from "./MesProjets";
import ContactezMoi from "./ContactezMoi";

import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";

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
          <QuiSuisJe />
        </div>
        <div>
          <MesServices />
        </div>
        <div>
          <Presentation />
        </div>
        <div>
          <MesProjets />
        </div>
        <div>
          <ContactezMoi />
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
