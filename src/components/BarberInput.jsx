// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function BarberInput({ createBarber }) {
  const [barberName, setBarberName] = useInput("");
  const [gender, setGender] = useInput("");
  const [address, setAddress] = useInput("");
  const [city, setCity] = useInput("");
  const [province, setProvince] = useInput("");
  const [phone, setPhone] = useInput("");
  const [experience, setExperience] = useInput("");
  const [skills, setSkills] = useInput("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !barberName ||
      !gender ||
      !address ||
      !city ||
      !province ||
      !phone ||
      !experience ||
      !skills
    ) {
      alert("Semua field harus diisi!");
      return;
    }
    try {
      await createBarber({
        barberName,
        gender,
        address,
        city,
        province,
        phone,
        experience,
        skills,
      });
      alert("Biodata berhasil di input");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form className="barber-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={barberName}
        onChange={setBarberName}
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
      <input
        type="text"
        value={experience}
        onChange={setExperience}
        placeholder="masukkan experience mu"
      />
      <input
        type="text"
        value={skills}
        onChange={setSkills}
        placeholder="masukkan skilss mu"
      />
      <button type="submit">Save</button>
    </form>
  );
}

BarberInput.propTypes = {
  createBarber: PropTypes.func.isRequired,
};

export default BarberInput;
