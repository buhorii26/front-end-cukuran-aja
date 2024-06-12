// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function ServiceInput({ createService }) {
  const [serviceName, setServiceName] = useInput("");
  const [description, setDescription] = useInput("");
  const [price, setPrice] = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceName || !description || !price) {
      alert("Semua field harus diisi!");
      return;
    }
    try {
      await createService({ serviceName, description, price });
      alert("Service berhasil dibuat");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form className="service-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={serviceName}
        onChange={setServiceName}
        placeholder="Masukkan Nama Pelayanan"
      />
      <input
        type="text"
        value={description}
        onChange={setDescription}
        placeholder="Masukkan Deskripsi Pelayanan"
      />
      <input
        type="text"
        value={price}
        onChange={setPrice}
        placeholder="masukkan price"
      />
      <button type="submit">Save</button>
    </form>
  );
}

ServiceInput.propTypes = {
  createService: PropTypes.func.isRequired,
};

export default ServiceInput;
