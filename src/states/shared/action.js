import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveCustomersActionCreator } from '../customers/action';

function asyncPopulateUsersAndCustomers() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const customers = await api.getAllCustomers();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveCustomersActionCreator(customers));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export default asyncPopulateUsersAndCustomers;
