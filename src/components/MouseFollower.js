import React, { useEffect } from "react";

const MouseFollower = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.pageY + "px";
      cursor.style.left = e.pageX + "px";
    });

    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });

      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return <span className="cursor"></span>;
};

export default MouseFollower;
