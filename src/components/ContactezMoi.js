import React, { useState } from "react";

export default function ContactezMoi() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nom,
      prenom,
      email,
      message,
    };
    fetch("https://formspree.io/f/xayzplww", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert("Votre message a bien été envoyé !");
        setNom("");
        setPrenom("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <section className="present">
      <div className="title bgBanner3">
        <div>
          <h2>Me contacter</h2>
          <h2>Un projet de création web ?</h2>
        </div>
      </div>
      <form
        className="book_container bgBackground3 flexCenter"
        onSubmit={handleSubmit}>
        <div className="formBox">
          <label className="informationForForm" htmlFor="nom">
            Nom*
          </label>
          <input
            id="nom"
            className="inputForm"
            type="text"
            name="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <label className="informationForForm" htmlFor="prenom">
            Prénom*
          </label>
          <input
            id="prenom"
            className="inputForm"
            type="text"
            name="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
          <label className="informationForForm" htmlFor="email">
            Email*
          </label>
          <input
            id="email"
            className="inputForm"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="informationForForm" htmlFor="message">
            Message*
          </label>
          <textarea
            id="message"
            className="inputForm messageForm"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required></textarea>
          <button className="sendEmail" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
}
