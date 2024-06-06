// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { asyncRegisterUser } from '../states/users/action';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, role, email, password }) => {
    dispatch(asyncRegisterUser({ name, role, email, password }));
    navigate('/login');
  };

  return (
    <>
      <Header />
      <section className="register-page">
        <article className="register-page__main">
          <h2>Register</h2>
          <RegisterForm register={onRegister} />

          <p>
            Sudah Punya Akun?
            {' '}
            <Link to="/login">Login</Link>
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default RegisterPage;
