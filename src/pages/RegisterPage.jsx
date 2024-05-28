import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoEarthOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { asyncRegisterUser } from '../states/users/action';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <>
      <Header />
      <section className="register-page">
        <header className="register-page__hero">
          <h1>
            <IoEarthOutline />
          </h1>
        </header>
        <article className="register-page__main">
          <h2>Register</h2>
          <RegisterForm register={onRegister} />

          <p>
            Already have an account?
            {' '}
            <Link to="/">Login</Link>
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default RegisterPage;
