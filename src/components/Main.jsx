// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import DashboardCustomerPage from "../pages/dashboard-customer/DashboardCustomerPage";
import DashboardBarberPage from "../pages/dashboard-barber/DashboardBarberPage";

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
  if (authUser.role === "barber") {
    return <DashboardBarberPage />;
  }
  return <DashboardCustomerPage />;
}
export default Main;
