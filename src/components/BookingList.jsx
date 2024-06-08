// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { postedAt } from "../utils/postedAt";

function BookingList({ bookings, createdAt }) {
  return (
    <>
      <h1 className="booking-list">Daftar List booking</h1>
      <ul className="card-container">
        {bookings.map((booking) => (
          <li key={booking.bookingId} className="card">
            <p>Customer ID: {booking.customer._id}</p>
            <p>Barber: {booking.barber._id}</p>
            <p>Service: {booking.service._id}</p>
            <p>Tanggal: {booking.date}</p>
            <p>Waktu: {booking.time}</p>
            <p>Waktu: {booking.place}</p>
            <p>Status: {booking.status}</p>
            <p>Created At :{postedAt(createdAt)}</p>
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
      customer: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
      barber: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
      service: PropTypes.shape({
        _id: PropTypes.string.isRequired,
      }).isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BookingList;
