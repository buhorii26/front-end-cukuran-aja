// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveDetailCustomer } from "../../states/detailCustomer/action";
import DetailCustomer from "../../components/DetailCustomer";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DetailCustomerPage() {
  const { id } = useParams();
  const { detailCustomer = null, loading } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailCustomer(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    );
  }

  if (!detailCustomer) {
    return (
      <>
        <Header />
        <p>Customer Tidak ditemukan!</p>
        <Footer />
      </>
    );
  }
  return (
    <>
    <Header />
      <div className="detailCustomer-page">
        <Loading />
        <DetailCustomer customer={detailCustomer}/>
      </div>
      <Footer />
    </>
  );
}

export default DetailCustomerPage;
