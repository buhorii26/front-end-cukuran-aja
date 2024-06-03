// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer>
        <div className="sosmed">
          <a href="#">
            <FiFacebook size={30}/>
          </a>
          <a href="#">
            <FiInstagram size={30}/>
          </a>
          <a href="#">
            <FiTwitter size={30} />
          </a>
        </div>
        <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">Tentang Kami</Link>
        <Link to="/service">Pelayanan</Link>
        </div>
        <div className="credit">
          <p>
            <b>Copyright &copy; 2024 cukuranaja.com </b>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
