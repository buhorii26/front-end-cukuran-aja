// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function BarberList({ barbers }) {
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
      <div className="barber-list">
      <h2>Daftar Barber</h2>
      <ul className="card-container">
        {barbers.map((barber) => (
          <li key={barber.barberId} className="card">
            <p>Nama: {barber.barberName}</p>
            <p>Gender: {barber.gender || "Tidak Diketahui"}</p>
            <p>Alamat: {barber.address}</p>
            <p>Kota: {barber.city}</p>
            <p>Provinsi: {barber.province}</p>
            <p>Telepon: {barber.phone}</p>
            <p>Experience: {barber.experience}</p>
            <p>Skills: {barber.skills}</p>
          </li>
        ))}
      </ul>
    </div>
    
    </>
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
