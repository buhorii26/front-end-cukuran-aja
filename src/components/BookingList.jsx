// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function BookingList({ bookings }) {
  return (
    <div className="booking-list">
      <h2>Daftar Booking</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.bookingId}>
            <p>Customer ID: {booking.customerId}</p>
            <p>Barber: {booking.barberId}</p>
            <p>Service: {booking.serviceId}</p>
            <p>Tanggal: {booking.date}</p>
            <p>Waktu: {booking.time}</p>
            <p>Waktu: {booking.place}</p>
            <p>Price: {booking.price}</p>
            <p>Status: {booking.status}</p>
          </li>
        ))}
      </ul>
      <Link to="/bookings/new">Add Bookings</Link>
    </div>
  );
}

BookingList.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      barberId: PropTypes.string.isRequired,
      serviceId: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookingList;
