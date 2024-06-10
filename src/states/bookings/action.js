import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_BOOKINGS: 'RECEIVE_BOOKINGS',
  CREATE_BOOKING: 'CREATE_BOOKING',
  UPDATE_BOOKING: 'UPDATE_BOOKING'
};

function receiveBookingsActionCreator(bookings) {
  return {
    type: ActionType.RECEIVE_BOOKINGS,
    payload: {
      bookings,
    },
  };
}

function createBookingActionCreator(booking) {
  return {
    type: ActionType.CREATE_BOOKING,
    payload: {
      booking,
    },
  };
}

function updateBookingActionCreator(booking) {
  return {
    type: ActionType.UPDATE_BOOKING,
    payload: {
      booking,
    }
  };
}

function asyncReceiveBookings() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const bookings = await api.getAllBookings();
      dispatch(receiveBookingsActionCreator(bookings));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateBooking({ customer, barber, service, date, time, place, status }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const newBooking = await api.createBooking({ customer, barber, service, date, time, place, status });
      dispatch(createBookingActionCreator(newBooking));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateBooking({ bookingId, customer, barber, service, date, time, place, status }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const booking = await api.updateBooking(bookingId, { customer, barber, service, date, time, place, status });
      dispatch(updateBookingActionCreator(booking));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveBookingsActionCreator,
  asyncReceiveBookings,
  createBookingActionCreator,
  asyncCreateBooking,
  updateBookingActionCreator,
  asyncUpdateBooking
};