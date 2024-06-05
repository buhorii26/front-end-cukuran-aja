// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateService } from "../states/services/action";
import ServiceInput from '../components/ServiceInput';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateServicePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);
  const onCreateService = ({ serviceName, price }) => {
    dispatch(asyncCreateService({ serviceName, price }));
    navigate('/services');
  };
  if (authUser === null) {
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
      <section className="add-barber-page">
        <div className="add-barber-page__card">
          <h5 className="add-barber-page__h5">Isi Pelayanan disini!</h5>
        </div>
        <ServiceInput createService={onCreateService} />
      </section>
      <Footer />
    </>
  );
}

export default CreateServicePage;
