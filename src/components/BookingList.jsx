// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { postedAt } from "../utils/postedAt";

function BookingList({ bookings }) {
  return (
    <>
      <h1 className="booking-list">Daftar List booking</h1>
      <ul className="card-container">
        {bookings.map((booking) => (
          <li key={booking.bookingId} className="card">
            <p>Customer Name: {booking.customerName}</p>
            <p>Barber Name: {booking.barberName}</p>
            <p>Service Name: {booking.serviceName}</p>
            <p>Tanggal: {booking.date}</p>
            <p>Waktu: {booking.time}</p>
            <p>Tempat: {booking.place}</p>
            <p>Status: {booking.status}</p>
            <p>Created At: {postedAt(booking.createdAt)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

BookingList.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      bookingId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      barberName: PropTypes.string.isRequired,
      serviceName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookingList;
