// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  asyncCheckAuthUser } from '../states/authUser/action';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(asyncCheckAuthUser());
    };
    checkAuth();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
