// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";

function DetailService({ service }) {
  const { authUser } = useSelector((states) => states);
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id', {
      style: 'currency',
      currency: 'JPY'
    }).format(price);
  };
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
        <p>Harga: {formatPrice(service.price)}</p>
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
        <p>Harga: {formatPrice(service.price)}</p>
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
