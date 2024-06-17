// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

function DetailCustomer({ customer }) {
  if (!customer) {
    return (
      <>
        <Header />
        <p>customer tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  return (
    <div className="customer-list">
      <h2>Detail Customer Page</h2>
      <div className="card-container">
        <p>Nama: {customer.customerName}</p>
        <p>Gender: {customer.gender}</p>
        <p>Alamat: {customer.address}</p>
        <p>Kota: {customer.city}</p>
        <p>Provinsi: {customer.province}</p>
        <p>Telepon: {customer.phone}</p>
      </div>
    </div>
  );
}

DetailCustomer.propTypes = {
  customer: PropTypes.shape({
    customerId: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    gender: PropTypes.string,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};

export default DetailCustomer;
