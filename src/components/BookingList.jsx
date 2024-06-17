// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { postedAt } from "../utils/postedAt";
import { useNavigate } from "react-router-dom";

function BookingList({ bookings }) {
  const navigate = useNavigate();
  const onCustomerClick = (id) => {
    navigate(`/customers/${id}`);
  };

  const onCustomerPress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/customers/${id}`);
    }
  };
  const onBarberClick = (id) => {
    navigate(`/barbers/${id}`);
  };

  const onBarberPress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/barbers/${id}`);
    }
  };
  const onServiceClick = (id) => {
    navigate(`/services/${id}`);
  };

  const onServicePress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/services/${id}`);
    }
  };
  return (
    <>
      <h1 className="booking-list">Daftar List Booking</h1>
      <ul className="card-container-booking">
        {bookings.map((booking) => (
          <li key={booking.bookingId} className="card">
            <p>
              Customer Name: {booking.customer.customerName}
              <span
                className="detail-cust-span"
                role="button"
                onClick={() => onCustomerClick(booking.customer._id)}
                onKeyDown={(event) =>
                  onCustomerPress(event, booking.customer._id)
                }
              >
                Detail Customer
              </span>
            </p>
            <p>
              Barber Name: {booking.barber.barberName}
              <span
                className="detail-cust-span"
                role="button"
                onClick={() => onBarberClick(booking.barber._id)}
                onKeyDown={(event) => onBarberPress(event, booking.barber._id)}
              >
                Detail Barber
              </span>
            </p>
            <p>
              Service Name: {booking.service.serviceName}
              <span
                className="detail-cust-span"
                role="button"
                onClick={() => onServiceClick(booking.service._id)}
                onKeyDown={(event) =>
                  onServicePress(event, booking.service._id)
                }
              >
                Detail Service
              </span>
            </p>
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
        _id: PropTypes.string.isRequired,
        customerName: PropTypes.string.isRequired,
      }).isRequired,
      barber: PropTypes.shape({
        barberName: PropTypes.string.isRequired,
      }).isRequired,
      service: PropTypes.shape({
        serviceName: PropTypes.string.isRequired,
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
