// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { asyncReceiveCustomers } from "../states/customers/action";

function BarberList({ barbers }) {
  const { customers } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveCustomers());
  }, [dispatch]);

  const onBarberClick = (id) => {
    if (!customers || customers.length === 0) {
      alert("Maaf anda belum isi biodata!");
    } else {
      navigate(`/barbers/${id}`);
    }
  };

  const onBarberPress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/barbers/${id}`);
    }
  };
  return (
    <>
      <div className="barber-list">
        <h2>Daftar Barber</h2>
        <ul className="card-container">
          {barbers.map((barber) => (
            <li
              key={barber.barberId}
              className="card"
              role="button"
              tabIndex={0}
            >
              <p>Nama: {barber.barberName}</p>
              <p>Experience: {barber.experience}</p>
              <p>Skills: {barber.skills}</p>
              <button
                onClick={() => onBarberClick(barber.barberId)}
                onKeyDown={(event) => onBarberPress(event, barber.barberId)}
              >
                Detail
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

BarberList.propTypes = {
  barbers: PropTypes.arrayOf(
    PropTypes.shape({
      barberId: PropTypes.string.isRequired,
      barberName: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      experience: PropTypes.string.isRequired,
      skills: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BarberList;
