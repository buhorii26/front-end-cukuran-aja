// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import DashboardCustomerPage from "../pages/dashboard-customer/DashboardCustomerPage";
import DashboardBarberPage from "../pages/dashboard-barber/DashboardBarberPage";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const { authUser } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main className="hero" id="home">
          <div className="content">
            <h1>
              Cukuran <span>Aja</span>
            </h1>
            <p>Platform Pangkas Rambut Anak Bangsa di Negara Jepang</p>
            <Link to="/login" className="cta">
              Login
            </Link>
          </div>
        </main>
      </>
    );
  }
  if (authUser.role === "customer") {
    return (
      <>
        <h1>Ini halaman Dashboard Customer</h1>
        <DashboardCustomerPage />
      </>
    );
  }
  if (authUser.role === "barber") {
    return (
      <>
        <h1>Ini halaman Dashboard Barber</h1>
        <DashboardBarberPage />
      </>
    );
  }
  return (
    <>
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
        <h1>Pilih role yang sesuai dengan kamu ?</h1>
      </div>
      <div className="card-container-role">
        <div className="card">
          <img src="/assets/img/customer-icon.png" alt="Customer" />
          <h3>-Customer-</h3>
          <p>
            <button>
              <Link to="/customers/new">Customer</Link>
            </button>
          </p>
        </div>
        <div className="card">
          <img src="/assets/img/barber-icon.png" alt="Barber" />
          <h3>-Barber-</h3>
          <p>
            <button>
              <Link to="/barbers/new">Barbers</Link>
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
export default Main;
