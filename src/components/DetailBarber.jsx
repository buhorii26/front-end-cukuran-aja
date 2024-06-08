// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function DetailBarber({ barber }) {
  if (!barber) {
    return (
      <>
        <Header />
        <p>barber tidak ditemukan</p>
        <Footer />
      </>
    );
  }

  return (
    <div className="barber-list">
      <h2>Detail barber Page</h2>
      <div className="card-container">
        <p>Nama: {barber.barberName}</p>
        <p>Gender: {barber.gender || "Tidak Diketahui"}</p>
        <p>Alamat: {barber.address}</p>
        <p>Kota: {barber.city}</p>
        <p>Provinsi: {barber.province}</p>
        <p>Telepon: {barber.phone}</p>
        <p>Experience: {barber.experience}</p>
        <p>Skills: {barber.skills}</p>
        <button>
          <Link to="/bookings/new">Add Booking</Link>
        </button>
      </div>
    </div>
  );
}

DetailBarber.propTypes = {
  barber: PropTypes.shape({
    id: PropTypes.string.isRequired,
    barberName: PropTypes.string.isRequired,
    gender: PropTypes.string,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
  }),
};

export default DetailBarber;
