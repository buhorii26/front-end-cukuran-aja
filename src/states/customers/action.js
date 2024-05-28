import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_CUSTOMERS: 'RECEIVE_CUSTOMERS',
  CREATE_CUSTOMER: 'CREATE_CUSTOMER',
};

function receiveCustomersActionCreator(customers) {
  return {
    type: ActionType.RECEIVE_CUSTOMERS,
    payload: {
      customers,
    },
  };
}

function createCustomerActionCreator(customer) {
  return {
    type: ActionType.CREATE_CUSTOMER,
    payload: {
      customer,
    },
  };
}

function asyncReceiveCustomers() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const customers = await api.getAllCustomers();
      dispatch(receiveCustomersActionCreator(customers));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateCustomer({ id, customerName, gender, address, city, province, phone }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const customer = await api.createCustomer({ id, customerName, gender, address, city, province, phone });
      dispatch(createCustomerActionCreator(customer));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveCustomersActionCreator,
  asyncReceiveCustomers,
  createCustomerActionCreator,
  asyncCreateCustomer
};