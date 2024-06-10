import { ActionType } from "./action";

function bookingsReducer(bookings = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BOOKINGS:
      return action.payload.bookings;
    case ActionType.CREATE_BOOKING:
      return [action.payload.booking, ...bookings];
    case ActionType.UPDATE_BOOKING:
      return bookings.map(booking => 
        booking.bookingId === action.payload.booking.bookingId ? action.payload.booking : booking
      );
    default:
      return bookings;
  }
}

export default bookingsReducer;