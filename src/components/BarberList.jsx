// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function BarberList({ barbers }) {
  const navigate = useNavigate();

  const onBarberClick = (id) => {
    navigate(`/barbers/${id}`);
  };

  const onBarberPress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/barbers/${id}`);
    }
  };

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
            <li key={barber.id} className="card" role="button" tabIndex={0}>
              <p>Nama: {barber.barberName}</p>
              <p>Experience: {barber.experience}</p>
              <p>Skills: {barber.skills}</p>
              <button
                onClick={() => onBarberClick(barber.id)}
                onKeyDown={(event) => onBarberPress(event, barber.id)}
              >
                Detail
              </button>
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
      id: PropTypes.string.isRequired,
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
