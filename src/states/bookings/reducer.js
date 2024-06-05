import { ActionType } from "./action";

function bookingsReducer(bookings = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BOOKINGS:
      return action.payload.bookings;
      case ActionType.CREATE_BOOKING:
        return [action.payload.bookings, ...bookings];
      case ActionType.UPDATE_BOOKING:
        return [action.payload.bookings, ...bookings];
    default:
      return bookings;
  }
}



export default bookingsReducer;