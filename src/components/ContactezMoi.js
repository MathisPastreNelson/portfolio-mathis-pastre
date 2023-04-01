import React from "react";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function ContactezMoi() {
  return (
    <section className="present">
      <div className="title bgBanner3">
        <div>
          <h2>Me contacter</h2>
          <h2>Un projet de création web ?</h2>
        </div>
      </div>
      <div className="book_container bgBackground3 flexCenter">
        <a href="mailto:mathis.pastre@outlook.com">
          <MailOutlined />
          <h3>Email</h3>
        </a>
        <a href="https://www.linkedin.com/in/mathis-pastre/">
          <LinkedinOutlined />
          <h3>Linkdin</h3>
        </a>
        <a href="https://github.com/MathisPastreNelson">
          <GithubOutlined />
          <h3>Github</h3>
        </a>
      </div>
    </section>
  );
}
