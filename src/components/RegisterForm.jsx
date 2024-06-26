// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [role, onRoleChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="register-input">
      <input
        type="text"
        name="fullname"
        label="Full Name"
        id="fullname"
        value={name}
        onChange={onNameChange}
        placeholder="Name"
        required
      />
      <select onChange={onRoleChange}>
        <option>--Pilih Role--</option>
        <option value="customer">Customer</option>
        <option value="barber">Barber</option>
      </select>
      <input
        type="text"
        name="email"
        label="Email Address"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        label="Password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
        required
      />
      <button
        type="button"
        onClick={() => register({ name, email, password, role })}
      >
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
