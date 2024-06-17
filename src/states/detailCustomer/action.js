import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_DETAIL_CUSTOMER: "RECEIVE_DETAIL_CUSTOMER",
  CLEAR_DETAIL_CUSTOMER: "CLEAR_DETAIL_CUSTOMER",
};

function receiveDetailCustomerActionCreator(detailCustomer) {
  return {
    type: ActionType.RECEIVE_DETAIL_CUSTOMER,
    payload: {
      detailCustomer,
    },
  };
}

function clearDetailCustomerActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_CUSTOMER,
  };
}

// thunk function
function asyncReceiveDetailCustomer(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearDetailCustomerActionCreator());

    try {
      const detailCustomer = await api.getCustomerById(id);
      dispatch(receiveDetailCustomerActionCreator(detailCustomer));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveDetailCustomerActionCreator,
  clearDetailCustomerActionCreator,
  asyncReceiveDetailCustomer,
};
