// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function CustomerList({ customers }) {
  const { authUser } = useSelector((states) => states);
  return (
    <>
    <div className="container-authuser">
        <h1>
          Selamat Datang {""}
          <img
            src={authUser.avatar}
            alt={authUser.id}
            title={authUser.name}
            className="user-avatar"
          />
          {authUser.name}!
        </h1>
      </div>
      <div className="alert">
        <Alert variant="success">Selamat anda sudah login!</Alert>
      </div>
    
    <div className="customer-list">
      <h2>Daftar Pelanggan</h2>
      <ul className="card-container">
        {customers.map((customer) => (
          <li key={customer.customerId} className="card">
            <p>Nama: {customer.customerName}</p>
            <p>Gender: {customer.gender}</p>
            <p>Alamat: {customer.address}</p>
            <p>Kota: {customer.city}</p>
            <p>Provinsi: {customer.province}</p>
            <p>Telepon: {customer.phone}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomerList;
