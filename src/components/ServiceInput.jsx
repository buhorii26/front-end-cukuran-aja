// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ServiceInput({ createService }) {
  const [serviceName, setServiceName] = useInput("");
  const [price, setPrice] = useInput("");

  return (
    <form className="service-input">
      <input
        type="text"
        value={serviceName}
        onChange={setServiceName}
        placeholder="Masukkan nama service"
      />
      <input
        type="text"
        value={price}
        onChange={setPrice}
        placeholder="masukkan price"
      />
      <button
        type="submit"
        onClick={() => createService({ serviceName, price })}
      >
        Save
      </button>
    </form>
  );
}

ServiceInput.propTypes = {
  createService: PropTypes.func.isRequired,
};

export default ServiceInput;
