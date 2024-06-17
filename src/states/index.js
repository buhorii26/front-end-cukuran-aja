import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from "./authUser/reducer";
import usersReducer from "./users/reducer";
import customersReducer from "./customers/reducer";
import detailCustomerReducer from "./detailCustomer/reducer";
import detailBarberReducer from "./detailBarber/reducer";
import detailServiceReducer from "./detailService/reducer";
import barbersReducer from "./barbers/reducer";
import servicesReducer from "./services/reducer";
import bookingsReducer from "./bookings/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    customers: customersReducer,
    detailCustomer: detailCustomerReducer,
    detailBarber: detailBarberReducer,
    detailService: detailServiceReducer,
    barbers: barbersReducer,
    services: servicesReducer,
    bookings: bookingsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
