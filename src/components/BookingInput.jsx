// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function BookingInput({ createBooking }) {
  const [customerId, setCustomerId] = useInput("");
  const [barberId, setBarberId] = useInput("");
  const [serviceId, setServiceId] = useInput("");
  const [date, setDate] = useInput("");
  const [time, setTime] = useInput("");
  const [place, setPlace] = useInput("");
  const [price, setPrice] = useInput("");
  const [status, setStatus] = useInput("");

  return (
    <form className="barber-input">
      <input
        type="text"
        value={customerId}
        onChange={setCustomerId}
        placeholder="Masukkan id Customer"
      />
      <input
        type="text"
        value={barberId}
        onChange={setBarberId}
        placeholder="Masukkan id Barber"
      />
      <input
        type="text"
        value={serviceId}
        onChange={setServiceId}
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
      />
      <input
        type="text"
        value={price}
        onChange={setPrice}
        placeholder="masukkan harga"
      />
      <input
        type="text"
        value={status}
        onChange={setStatus}
        placeholder="masukkan status"
      />
      <button
        type="submit"
        onClick={() => createBooking({ customerId, barberId, serviceId, date, time, place, price, status })}
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
