// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h2>
        <span>Tentang</span> Kami
      </h2>
      <div className="row">
        <div className="about-img">
          <img
            src="/assets/logo/logo-cukuran-aja.png"
            alt="Tentang Kami"
            className="img-fluid"
          />
        </div>
        <div className="content-about">
          <h3>Apa itu Cukuran Aja?</h3>
          <p>
            Platform “Cukuran Aja” hadir sebagai solusi inovatif ditengah
            sulitnya WNI di Jepang yang ingin pangkas rambut atau hair styling
            lainnya karena terkendala biaya maupun jarak, dengan memanfaatkan
            teknologi untuk menyediakan layanan jasa pangkas rambut panggilan,
            memenuhi kebutuhan konsumen dan membuka peluang ekonomi bagi para
            barber profesional maupun non profesional dengan cara menyelaraskan
            teknologi dan kebutuhan pasar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
