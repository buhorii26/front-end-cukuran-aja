// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Link } from "react-router-dom";

function Main() {
  return (
    <main>
      <div className="content">
        <div className="content-description">
          <h1 className="title">Cukuran Aja</h1>
          <p>
          Platform Pangkas Rambut Anak Bangsa di Negara Jepang
          </p>
          <button>Masuk</button>
        </div>
        <div className="content-image">
          <img src="/assets/logo/logo_hitam.png" alt="Cukuran Aja" />
        </div>
      </div>
      <aside>
        <div className="social-media">
          <ul>
            <li>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </li>
          </ul>
        </div>
      </aside>
    </main>
  );
}
export default Main;
