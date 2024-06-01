// eslint-disable-next-line no-unused-vars
import React from "react";

function Service() {
  return (
    <section className="menu" id="service">
      <h2><span>Pelayanan</span> Kami</h2>
      <p>Pelayanan :</p>
      <div className="row">
        <div className="menu-card">
          <img src="/assets/pelayanan/trimming.png" alt="Trimming"/>
          <h3 className="menu-card-tittle">-Trimming-</h3>
        </div>
        <div className="menu-card">
          <img src="/assets/pelayanan/Coloring.png" alt="Coloring"/>
          <h3 className="menu-card-tittle">-Coloring-</h3>
        </div>
        <div className="menu-card">
          <img src="/assets/pelayanan/Grooming.png" alt="Grooming"/>
          <h3 className="menu-card-tittle">-Grooming-</h3>
        </div>
      </div>
    </section>
  );
}

export default Service;
