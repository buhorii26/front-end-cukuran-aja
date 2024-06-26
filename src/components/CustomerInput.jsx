// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function CustomerInput({ createCustomer }) {
  const [customerName, setCustomerName] = useInput("");
  const [gender, setGender] = useInput("");
  const [address, setAddress] = useInput("");
  const [city, setCity] = useInput("");
  const [province, setProvince] = useInput("");
  const [phone, setPhone] = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!customerName || !gender || !address || !city || !province || !phone) {
      alert("Semua field harus diisi!");
      return;
    }
    try {
      await createCustomer({
        customerName,
        gender,
        address,
        city,
        province,
        phone,
      });
      alert("Biodata berhasil di input");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form className="customer-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={customerName}
        onChange={setCustomerName}
        placeholder="Masukkan nama mu"
      />
      <select onChange={setGender}>
        <option>--Pilih Jenis Kelamin--</option>
        <option value="Laki-laki">Laki-laki</option>
        <option value="Perempuan">Perempuan</option>
      </select>
      <textarea
        type="text"
        value={address}
        onChange={setAddress}
        placeholder="Masukkan alamat"
      />
      <input
        type="text"
        value={city}
        onChange={setCity}
        placeholder="masukkan kota mu"
      />
      <input
        type="text"
        value={province}
        onChange={setProvince}
        placeholder="masukkan province mu"
      />
      <input
        type="text"
        value={phone}
        onChange={setPhone}
        placeholder="masukkan no hp mu"
      />
      <button type="submit">Save</button>
    </form>
  );
}

CustomerInput.propTypes = {
  createCustomer: PropTypes.func.isRequired,
};

export default CustomerInput;
