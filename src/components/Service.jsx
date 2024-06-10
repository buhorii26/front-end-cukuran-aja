// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Service({ services }) {
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);

  const onServiceClick = (id) => {
    if (authUser === null) {
      alert("Login First");
    } else {
      navigate(`/services/${id}`);
    }
  };

  const onServicePress = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      navigate(`/service/${id}`);
    }
  };
  return (
    <>
      <div className="card-container">
        <h2>
          <span>Pelayanan </span>&nbsp;Kami
        </h2>
        {services.map((service) => (
          <div className="card" key={service.serviceId}>
            <img
              src={`/assets/pelayanan/${service.serviceName}.png`}
              alt={service.serviceName}
            />
            <h3>-{service.serviceName}-</h3>
            <p>
              <button
                onClick={() => onServiceClick(service.serviceId)}
                onKeyDown={(event) => onServicePress(event, service.serviceId)}
              >
                Detail
              </button>
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
Service.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      serviceId: PropTypes.string.isRequired,
      serviceName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Service;
