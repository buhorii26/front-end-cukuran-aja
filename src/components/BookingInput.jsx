// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from '../utils/api';

function BookingInput({ createBooking }) {
  const [customer, setCustomer] = useState("");
  const [barber, setBarber] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [status, setStatus] = useState("");

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

    if (!customer || !barber || !service || !date || !time || !place || !status) {
      alert("Semua field harus diisi!");
      return;
    }

    createBooking({ customer, barber, service, date, time, place, status });
  };

  return (
    <form className="booking-input" onSubmit={handleSubmit}>
      <select value={customer} onChange={(e) => setCustomer(e.target.value)} required>
        <option value="">Pilih Customer</option>
        {customers.map(customer => (
          <option key={customer.customerId} value={customer.customerId}>
            {customer.customerName}
          </option>
        ))}
      </select>
      <select value={barber} onChange={(e) => setBarber(e.target.value)} required>
        <option value="">Pilih Barber</option>
        {barbers.map(barber => (
          <option key={barber.barberId} value={barber.barberId}>
            {barber.barberName}
          </option>
        ))}
      </select>
      <select value={service} onChange={(e) => setService(e.target.value)} required>
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
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Masukkan Tempat"
        required
      />
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Masukkan Status"
        required
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
