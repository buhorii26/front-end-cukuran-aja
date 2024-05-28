// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveCustomers } from "../states/customers/action";
import CustomerList from "../components/CustomerList";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CustomerListPage() {
  const dispatch = useDispatch();
  const { customers } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveCustomers());
  }, [dispatch]);

  if (!customers || customers.length === 0) {
    return (
      <>
        <Header />
        <p>Maaf anda belum login</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <CustomerList customers={customers} /> {/* Pass customers as props */}
      <Footer />
    </>
  );
}

export default CustomerListPage;
