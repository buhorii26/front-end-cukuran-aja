import { ActionType } from "./action";

function customersReducer(customers = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CUSTOMERS:
      return action.payload.customers;
      case ActionType.CREATE_CUSTOMER:
        return [action.payload.customer, ...customers];
      case ActionType.UPDATE_CUSTOMER:
        return [action.payload.customer, ...customers];
    default:
      return customers;
  }
}



export default customersReducer;