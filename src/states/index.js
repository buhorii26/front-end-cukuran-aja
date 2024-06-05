import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from "./authUser/reducer";
import usersReducer from "./users/reducer";
import customersReducer from "./customers/reducer";
import barbersReducer from "./barbers/reducer";
import servicesReducer from "./services/reducer";
import bookingsReducer from "./bookings/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    customers: customersReducer,
    barbers: barbersReducer,
    services: servicesReducer,
    bookings: bookingsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
