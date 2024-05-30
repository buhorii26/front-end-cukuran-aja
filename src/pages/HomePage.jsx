// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {  asyncCheckAuthUser } from '../states/authUser/action';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(asyncCheckAuthUser());
      setIsLoading(false);
    };
    checkAuth();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default HomePage;
