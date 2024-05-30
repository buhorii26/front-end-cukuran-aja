// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateBarber } from "../states/barbers/action";
import BarberInput from '../components/BarberInput';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateBarberPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCreateBarber = ({ barberName, gender, address, city, province, phone, experience, skills }) => {
    dispatch(asyncCreateBarber({ barberName, gender, address, city, province, phone, experience, skills }));
    navigate('/barbers');
  };
  return (
    <>
      <Header />
      <section className="add-thread-page">
        <div className="add-thread-page__card">
          <h5 className="add-thread-page__h5">Buat Customer New</h5>
        </div>
        <BarberInput createBarber={onCreateBarber} />
      </section>
      <Footer />
    </>
  );
}

export default CreateBarberPage;
