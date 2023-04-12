import React from "react";

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:mathis.pastre@outlook.com">
        <MailOutlined />
        <h3>Email</h3>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/mathis-pastre/">
        <LinkedinOutlined />
        <h3>Linkdin</h3>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MathisPastreNelson">
        <GithubOutlined />
        <h3>Github</h3>
      </a>
    </footer>
  );
}
