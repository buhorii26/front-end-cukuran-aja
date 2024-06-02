// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation';
import { asyncUnsetAuthUser } from '../states/authUser/action';
import { useNavigate } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };
  return (

    <header className="navbar-container">
      <div className="logo">
        <img src="/assets/logo/logo_hitam.png" alt="Cukuran Aja" />
      </div>
      <Navigation signOut={onSignOut}/>
    </header>
  );
}

export default Header;
