// eslint-disable-next-line no-unused-vars
import React,{ useEffect } from "react";
import Header from "../../components/Header";
import Service from "../../components/Service";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveServices } from "../../states/services/action";
import Footer from "../../components/Footer";

function ServicePage() {
  const dispatch = useDispatch();
  const { services } = useSelector((states) => states);
  
  useEffect(() => {
    dispatch(asyncReceiveServices());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Service services={services} />
      <Footer />
    </>
  );
}

export default ServicePage;
