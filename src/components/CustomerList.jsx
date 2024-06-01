// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomerList({ customers }) {
  return (
    <div className="customer-list">
      <h2>Daftar Pelanggan</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.customerId}>
            <p>Nama: {customer.customerName}</p>
            <p>Gender: {customer.gender}</p>
            <p>Alamat: {customer.address}</p>
            <p>Kota: {customer.city}</p>
            <p>Provinsi: {customer.province}</p>
            <p>Telepon: {customer.phone}</p>
          </li>
        ))}
      </ul>
      <Link to="/customers/new">Add Customers</Link>
    </div>
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
