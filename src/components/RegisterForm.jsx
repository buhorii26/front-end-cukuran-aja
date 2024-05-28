// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
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
        onClick={() => register({ name, email, password })}
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
