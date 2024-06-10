// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveDetailBarber } from "../../states/detailBarber/action";
import DetailBarber from "../../components/DetailBarber";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DetailBarberPage() {
  const { id } = useParams();
  const { detailBarber = null, loading } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailBarber(id));
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

  if (!detailBarber) {
    return (
      <>
        <Header />
        <p>Barber Tidak ditemukan!</p>
        <Footer />
      </>
    );
  }
  return (
    <>
    <Header />
      <div className="detailBarber-page">
        <Loading />
        <DetailBarber barber={detailBarber}/>
      </div>
      <Footer />
    </>
  );
}

export default DetailBarberPage;
