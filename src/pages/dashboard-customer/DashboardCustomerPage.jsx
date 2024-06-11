// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveBarbers } from "../../states/barbers/action";
import { asyncCheckAuthUser } from "../../states/authUser/action";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import BarberList from "../../components/BarberList";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function DashboardCustomerPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { barbers, authUser } = useSelector((states) => states);

  useEffect(() => {
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

  if (!barbers || barbers.length === 0) {
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
      <h1>Isi biodata <Link to='/customers/new'>disini</Link></h1>
      <BarberList barbers={barbers} />
    </>
  );
}

export default DashboardCustomerPage;
