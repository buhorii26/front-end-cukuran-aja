// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { asyncReceiveDetailService } from "../../states/detailService/action";
import DetailService from "../../components/DetailService";
import Loading from "../../components/Loading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DetailServicePage() {
  const { id } = useParams();
  const { detailService = null, loading } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveDetailService(id));
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

  if (!detailService) {
    return (
      <>
        <Header />
        <p>Service Tidak ditemukan!</p>
        <Footer />
      </>
    );
  }
  return (
    <>
    <Header />
      <div className="detailBarber-page">
        <Loading />
        <DetailService service={detailService}/>
      </div>
      <Footer />
    </>
  );
}

export default DetailServicePage;
