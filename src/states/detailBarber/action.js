import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_DETAIL_BARBER: "RECEIVE_DETAIL_BARBER",
  CLEAR_DETAIL_BARBER: "CLEAR_DETAIL_BARBER",
};

function receiveDetailBarberActionCreator(detailBarber) {
  return {
    type: ActionType.RECEIVE_DETAIL_BARBER,
    payload: {
      detailBarber,
    },
  };
}

function cleardetailBarberActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_BARBER,
  };
}

// thunk function
function asyncReceiveDetailBarber(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(cleardetailBarberActionCreator());

    try {
      const barber = await api.getBarberById(id);
      dispatch(receiveDetailBarberActionCreator(barber));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveDetailBarberActionCreator,
  cleardetailBarberActionCreator,
  asyncReceiveDetailBarber,
};
