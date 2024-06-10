import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
  RECEIVE_DETAIL_SERVICE: "RECEIVE_DETAIL_SERVICE",
  CLEAR_DETAIL_SERVICE: "CLEAR_DETAIL_SERVICE",
};

function receiveDetailServiceActionCreator(detailService) {
  return {
    type: ActionType.RECEIVE_DETAIL_SERVICE,
    payload: {
      detailService,
    },
  };
}

function cleardetailServiceActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_SERVICE,
  };
}

// thunk function
function asyncReceiveDetailService(id) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(cleardetailServiceActionCreator());

    try {
      const detailService = await api.getServiceById(id);
      dispatch(receiveDetailServiceActionCreator(detailService));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveDetailServiceActionCreator,
  cleardetailServiceActionCreator,
  asyncReceiveDetailService,
};
