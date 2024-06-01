// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <main className="hero" id="home">
        <div className="content">
        <h1>Cukuran <span>Aja</span></h1>
        <p>
          Platform Pangkas Rambut Anak Bangsa di Negara Jepang
        </p>
        <Link to="/login" className="cta">Masuk</Link>
        </div>
      </main>
    </>
  );
}
export default Main;
