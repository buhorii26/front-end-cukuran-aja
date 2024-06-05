// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import DashboardCustomerPage from "../pages/dashboard-customer/DashboardCustomerPage";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
// import { asyncReceiveCustomers} from '../states/customers/action';

function Main() {
  // const dispatch = useDispatch();
  const { authUser, customers } = useSelector((states) => states);
  
  // UseEffect untuk memuat data pelanggan saat komponen dirender
  // useEffect(() => {
  //   dispatch(asyncReceiveCustomers());
  // }, [dispatch]);
  // Logika untuk memeriksa apakah data customer sudah diinput
  const hasCustomerData = customers && customers.length > 0;
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
  if (hasCustomerData) {
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
        <DashboardCustomerPage />
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
        <Alert variant="success">
          Selamat anda sudah login!
        </Alert>
        <h1>Pilih role yang sesuai dengan kamu ?</h1>
      </div>
      <div className="card-container-role">
        <div className="card">
          <img src="/assets/img/customer-icon.png" alt="Customer" />
          <h3>-Customer-</h3>
          <p>
            <button><Link to="/customers/new">Customer</Link></button>
          </p>
        </div>
        <div className="card">
          <img src="/assets/img/barber-icon.png" alt="Barber" />
          <h3>-Barber-</h3>
          <p>
            <button><Link to="/barbers/new">Barbers</Link></button>
          </p>
        </div>
      </div>
    </>
  );
}
export default Main;
