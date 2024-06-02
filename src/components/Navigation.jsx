import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";

function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <nav className="nav-list">
        <ul>
          <li>
            <Link to="/" id="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" id="about">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/service" id="service">
              Pelayanan
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="nav-list">
      <ul>
        <li>
          <Link to="/" id="home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" id="about">
            Tentang Kami
          </Link>
        </li>
        <li>
          <Link to="/service" id="service">
            Pelayanan
          </Link>
        </li>
        <li>
          <button className="signOut" onClick={signOut}>
            <FiLogOut size={20} />
            <strong>Logout</strong>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
