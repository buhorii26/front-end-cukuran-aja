// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveBookings } from "../../states/bookings/action";
import { asyncCheckAuthUser } from "../../states/authUser/action";
import Loading from "../../components/Loading";
import BookingList from "../../components/BookingList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function BookingListPage() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.bookings);

  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(asyncCheckAuthUser());
    };
    checkAuth();
  }, [dispatch]);

  useEffect(() => {
    dispatch(asyncReceiveBookings());
  }, [dispatch]);

  if (!bookings || bookings.length === 0) {
    return (
      <>
        <Header />
        <Loading />
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
      <Loading />
      <BookingList bookings={bookings} />
      <Footer />
    </>
  );
}

export default BookingListPage;