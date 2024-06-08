// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function DetailService({ service }) {
  if (!service) {
    return (
      <>
        <Header />
        <p>service tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  return (
    <div className="barber-list">
      <h2>Detail Pelayanan</h2>
      <div className="card-container">
        <p>Nama Pelayanan: {service.serviceName}</p>
        <p>Price: {service.price }</p>
        <button>
          <Link to="/services/new">Add Service</Link>
        </button>
      </div>
    </div>
  );
}

DetailService.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default DetailService;
