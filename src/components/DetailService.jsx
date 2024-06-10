// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DetailService({ service }) {
  const { authUser } = useSelector((states) => states);
  if (!service) {
    return (
      <>
        <Header />
        <p>service tidak ditemukan</p>
        <Footer />
      </>
    );
  }
  if (authUser.role === 'barber') {
    return (
      <div className="barber-list">
      <h2>Detail Pelayanan</h2>
      <div className="card-container">
        <img
          src={`/assets/pelayanan/${service.serviceName}.png`}
          alt={service.serviceName}
          width="100px"
        />
        <p>Nama Pelayanan: {service.serviceName}</p>
        <p>Price: {service.price}</p>
        <p><Link to='/services/new'>Add Services</Link></p>
      </div>
    </div>
    );
  }

  return (
    <div className="barber-list">
      <h2>Detail Pelayanan</h2>
      <div className="card-container">
        <img
          src={`/assets/pelayanan/${service.serviceName}.png`}
          alt={service.serviceName}
          width="100px"
        />
        <p>Nama Pelayanan: {service.serviceName}</p>
        <p>Price: {service.price}</p>
      </div>
    </div>
  );
}

DetailService.propTypes = {
  service: PropTypes.shape({
    serviceId: PropTypes.string.isRequired,
    serviceName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default DetailService;
