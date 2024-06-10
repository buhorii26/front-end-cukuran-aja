// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import api from '../utils/api';

function BookingInput({ createBooking }) {
  const [customerId, setCustomerId] = useState("");
  const [barberId, setBarberId] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useInput("");
  const [time, setTime] = useInput("");
  const [place, setPlace] = useInput("");
  const [status, setStatus] = useInput("");

  const [customers, setCustomers] = useState([]);
  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch customers, barbers, and services data when the component mounts
    async function fetchData() {
      try {
        const fetchedCustomers = await api.getAllCustomers();
        const fetchedBarbers = await api.getAllBarbers();
        const fetchedServices = await api.getAllServices();

        setCustomers(fetchedCustomers);
        setBarbers(fetchedBarbers);
        setServices(fetchedServices);
      } catch (error) {
        alert(error.message);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createBooking({ customerId, barberId, serviceId, date, time, place, status });
  };

  return (
    <form className="booking-input" onSubmit={handleSubmit}>
      <select value={customerId} onChange={(e) => setCustomerId(e.target.value)}>
        <option value="">Pilih Customer</option>
        {customers.map(customer => (
          <option key={customer.customerId} value={customer.customerId}>
            {customer.customerName}
          </option>
        ))}
      </select>
      <select value={barberId} onChange={(e) => setBarberId(e.target.value)}>
        <option value="">Pilih Barber</option>
        {barbers.map(barber => (
          <option key={barber.barberId} value={barber.barberId}>
            {barber.barberName}
          </option>
        ))}
      </select>
      <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}>
        <option value="">Pilih Service</option>
        {services.map(service => (
          <option key={service.serviceId} value={service.serviceId}>
            {service.serviceName}
          </option>
        ))}
      </select>
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
        placeholder="Masukkan status"
      />
      <button type="submit">
        Order
      </button>
    </form>
  );
}

BookingInput.propTypes = {
  createBooking: PropTypes.func.isRequired,
};

export default BookingInput;