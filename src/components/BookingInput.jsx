// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function BookingInput({ createBooking }) {
  const [customer, setCustomer] = useInput("");
  const [barber, setBarber] = useInput("");
  const [service, setService] = useInput("");
  const [date, setDate] = useInput("");
  const [time, setTime] = useInput("");
  const [place, setPlace] = useInput("");
  const [status, setStatus] = useInput("");

  return (
    <form className="booking-input">
      <input
        type="text"
        value={customer}
        onChange={setCustomer}
        placeholder="Masukkan id Customer"
      />
      <input
        type="text"
        value={barber}
        onChange={setBarber}
        placeholder="Masukkan id Barber"
      />
      <input
        type="text"
        value={service}
        onChange={setService}
        placeholder="Masukkan id Service"
      />
      <input
        type="date"
        value={date}
        onChange={setDate}
      />
      <input
        type="time"
        value={time}
        onChange={setTime}
      />
      <input
        type="text"
        value={place}
        onChange={setPlace}
        placeholder="Masukkan Tempat"
      />
      <input
        type="text"
        value={status}
        onChange={setStatus}
        placeholder="masukkan status"
      />
      <button
        type="submit"
        onClick={() => createBooking({ customer, barber, service, date, time, place, status })}
      >
        Save
      </button>
    </form>
  );
}

BookingInput.propTypes = {
  createBooking: PropTypes.func.isRequired,
};

export default BookingInput;
