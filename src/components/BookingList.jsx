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
            <p>Customer Name: {booking.customer.customerName}</p>
            <p>Customer ID: {booking.customer._id}</p>
            <p>Barber Name: {booking.barber._id}</p>
            <p>Barber ID: {booking.barber._id}</p>
            <p>Service Name: {booking.service.serviceName}</p>
            <p>Service ID: {booking.service._id}</p>
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
      customer: PropTypes.shape({
        customerName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
      barber: PropTypes.shape({
        barberName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
      service: PropTypes.shape({
        serviceName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
      }).isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BookingList;
