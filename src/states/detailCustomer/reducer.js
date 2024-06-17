import { ActionType } from "./action";

function detailCustomerRecuder(detailCustomer = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_CUSTOMER:
      return action.payload.detailCustomer;
    case ActionType.CLEAR_DETAIL_CUSTOMER:
      return null;
    default:
      return detailCustomer;
  }
}

export default detailCustomerRecuder;
