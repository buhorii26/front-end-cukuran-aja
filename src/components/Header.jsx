// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './Navigation';
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Header() {
  const dispatch = useDispatch();
  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };
  return (
    <header>
      <div className="jumbotron">
        <h1>Aplikasi Cukuran Aja</h1>
        <p>
          Sebuah aplikasi memudahkan pengguna untuk reversasi online barbershop.
        </p>
      </div>
      <Navigation signOut={onSignOut}/>
    </header>
  );
}

export default Header;
