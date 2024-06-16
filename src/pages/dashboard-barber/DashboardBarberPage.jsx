// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveBookings } from "../../states/bookings/action";
import {  asyncCheckAuthUser } from "../../states/authUser/action";
import { asyncReceiveBarbers } from "../../states/barbers/action";
import Loading from '../../components/Loading';
import { Link } from "react-router-dom";
import BookingList from "../../components/BookingList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardBarberPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { bookings, authUser } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveBookings());
    dispatch(asyncReceiveBarbers());
  }, [dispatch]);

  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(asyncCheckAuthUser());
      setIsLoading(false);
    };
    checkAuth();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!bookings || bookings.length === 0) {
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
      <div className="container-authuser">
        <h1>
          Selamat Datang {""}
          <img
            src={authUser.avatar}
            alt={authUser.id}
            title={authUser.name}
            className="user-avatar"
          />
          {authUser.name}!
        </h1>
      </div>
      <div className="alert">
        <Alert variant="success">Selamat anda sudah login!</Alert>
      </div>
      <h1>Isi biodata <Link to='/barbers/new'>disini</Link></h1>
      <BookingList bookings={bookings} />
    </>
  );
}

export default DashboardBarberPage;
