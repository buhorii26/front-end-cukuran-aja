// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateCustomer } from '../states/customers/action';
import CustomerInput from '../components/CustomerInput';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CreateCustomerPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onCreateCustomer = ({ id, customerName, gender, address, city, province, phone }) => {
    dispatch(asyncCreateCustomer({ id, customerName, gender, address, city, province, phone }));
    navigate('/customers');
  };
  return (
    <>
      <Header />
      <section className="add-thread-page">
        <div className="add-thread-page__card">
          <h5 className="add-thread-page__h5">Buat Customer New</h5>
        </div>
        <CustomerInput createCustomer={onCreateCustomer} />
      </section>
      <Footer />
    </>
  );
}

export default CreateCustomerPage;
