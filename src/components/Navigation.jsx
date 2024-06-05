import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";

function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-logo"
        ><img src="/assets/logo/logo_hitam.png" width="150px"
      /></a>
      <div className="navbar-list">
        <Link to="/">Home</Link>
        <Link to="/about">Tentang Kami</Link>
        <Link to="/services">Pelayanan</Link>
        <Link to="/login">Login</Link>
      </div>
      </nav>
    );
  }
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo"
        ><img src="/assets/logo/logo_hitam.png" width="120px"
      /></a>
      <div className="navbar-list">
        <Link to="/">Home</Link>
        <Link to="/about">Tentang Kami</Link>
        <Link to="/services">Pelayanan</Link>
        <button className="signOut" onClick={signOut}>
            <FiLogOut size={20}/>
            <strong>Logout</strong>
          </button>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
