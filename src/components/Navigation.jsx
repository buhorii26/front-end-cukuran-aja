import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { BsBoxArrowRight } from "react-icons/bs";

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
            <Link to="/customers">Customers</Link>
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
          <img src={authUser.avatar} alt={authUser.id} title={authUser.name} />
          <BsBoxArrowRight
            size={30}
            type="button"
            onClick={signOut}
            className="signOut"
          />
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
