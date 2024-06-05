// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateBooking } from "../states/bookings/action";
import BookingInput from '../components/BookingInput';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateBookingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);
  const onCreateBooking = ({ customerId, barberId, serviceId, date, time, price, status }) => {
    dispatch(asyncCreateBooking({ customerId, barberId, serviceId, date, time, price, status }));
    navigate('/bookings');
  };
  if (authUser === null) {
    return (
      <>
        <Header />
        <div className="content">
          <Alert variant="danger">Maaf anda belum login!</Alert>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <section className="add-barber-page">
        <div className="add-barber-page__card">
          <h5 className="add-barber-page__h5">Isi Booking!</h5>
        </div>
        <BookingInput createBooking={onCreateBooking} />
      </section>
      <Footer />
    </>
  );
}

export default CreateBookingPage;
