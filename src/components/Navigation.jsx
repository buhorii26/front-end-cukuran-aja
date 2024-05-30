import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";

function Navigation({ signOut }) {
  const { authUser = null } = useSelector((states) => states);

  if (authUser === null) {
    return (
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <button className="signOut" onClick={signOut}>
            <FiLogOut />
            {/* <img
              src={authUser.avatar}
              alt={authUser.id}
              title={authUser.name}
              size={20}
            /> */}
            <strong>{authUser.name}</strong>
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
