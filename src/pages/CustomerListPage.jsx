// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveCustomers } from "../states/customers/action";
import {  asyncCheckAuthUser } from '../states/authUser/action';
import Loading from '../components/Loading';
import CustomerList from "../components/CustomerList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerListPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { customers } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveCustomers());
  }, [dispatch]);

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

  if (!customers || customers.length === 0) {
    return (
      <>
        <Header />
        <div className="content">
          <Alert variant="danger">Maaf anda belum login!</Alert>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <CustomerList customers={customers} />
      <Footer />
    </>
  );
}

export default CustomerListPage;
