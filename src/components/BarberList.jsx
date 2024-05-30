// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BarberList({ barbers }) {
  return (
    <div className="customer-list">
      <h2>Daftar Barber</h2>
      <ul>
        {barbers.map((barber) => (
          <li key={barber.barberId}>
            <p>Nama: {barber.barberName}</p>
            <p>Gender: {barber.gender}</p>
            <p>Alamat: {barber.address}</p>
            <p>Kota: {barber.city}</p>
            <p>Provinsi: {barber.province}</p>
            <p>Telepon: {barber.phone}</p>
            <p>Experience: {barber.experience}</p>
            <p>Skills: {barber.skills}</p>
          </li>
        ))}
      </ul>
      <Link to="/barbers/new">Add Barbers</Link>
    </div>
  );
}

BarberList.propTypes = {
  barbers: PropTypes.arrayOf(
    PropTypes.shape({
      barberId: PropTypes.string.isRequired,
      barberName: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BarberList;
