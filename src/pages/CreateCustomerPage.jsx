// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateCustomer } from '../states/customers/action';
import CustomerInput from '../components/CustomerInput';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateCustomerPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authUser } = useSelector((states) => states);
  const onCreateCustomer = ({ customerName, gender, address, city, province, phone }) => {
    dispatch(asyncCreateCustomer({ customerName, gender, address, city, province, phone }));
    navigate('/customers');
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
      <section className="add-customer-page">
        <div className="add-customer-page__card">
          <h5 className="add-customer-page__h5">Buat Customer New</h5>
        </div>
        <CustomerInput createCustomer={onCreateCustomer} />
      </section>
      <Footer />
    </>
  );
}

export default CreateCustomerPage;
