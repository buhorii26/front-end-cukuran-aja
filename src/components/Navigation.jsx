// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FiLogOut, FiMenu } from "react-icons/fi";

function Navigation({ signOut }) {
  const { authUser } = useSelector((states) => states);
  const [isActive, setIsActive] = useState(false);
  const navbarListRef = useRef(null);
  const hamburgerRef = useRef(null);

  const handleHamburgerClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (
      navbarListRef.current &&
      hamburgerRef.current &&
      !navbarListRef.current.contains(event.target) &&
      !hamburgerRef.current.contains(event.target)
    ) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const renderNavLinks = () => (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">Tentang Kami</Link>
      <Link to="/services">Pelayanan</Link>
      {authUser && authUser.role !== "barber" && <Link to="/bookings">Bookings</Link>}
      {authUser ? (
        <button className="signOut" onClick={signOut}>
          <FiLogOut size={20} />
          <strong>Logout</strong>
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );

  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo">
        <img src="/assets/logo/logo_hitam.png" width={authUser ? "120px" : "150px"} alt="Logo" />
      </a>
      <div className={`navbar-list ${isActive ? "active" : ""}`} ref={navbarListRef}>
        {renderNavLinks()}
      </div>
      <div className="navbar-extra">
        <button id="hamburger-menu" ref={hamburgerRef} onClick={handleHamburgerClick}>
          <FiMenu />
        </button>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
