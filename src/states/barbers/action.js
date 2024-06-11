import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_BARBERS: 'RECEIVE_BARBERS',
  CREATE_BARBER: 'CREATE_BARBER',
  UPDATE_BARBER: 'UPDATE_BARBER'
};

function receiveBarbersActionCreator(barbers) {
  return {
    type: ActionType.RECEIVE_BARBERS,
    payload: {
      barbers,
    },
  };
}

function createBarberActionCreator(barber) {
  return {
    type: ActionType.CREATE_BARBER,
    payload: {
      barber,
    },
  };
}

function updateBarberActionCreator(barber) {
  return {
    type: ActionType.UPDATE_BARBER,
    payload: {
      barber,
    }
  }
}

function asyncReceiveBarbers() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const barbers = await api.getAllBarbers();
      dispatch(receiveBarbersActionCreator(barbers));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateBarber({ user, barberName, gender, address, city, province, phone, experience, skills }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const barber = await api.createBarber({ user, barberName, gender, address, city, province, phone, experience, skills });
      dispatch(createBarberActionCreator(barber));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncUpdateBarber({ barberId, barberName, gender, address, city, province, phone, experience, skills }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const barber = await api.updateBarber({ barberId, barberName, gender, address, city, province, phone, experience, skills });
      dispatch(updateBarberActionCreator(barber));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveBarbersActionCreator,
  asyncReceiveBarbers,
  createBarberActionCreator,
  asyncCreateBarber,
  updateBarberActionCreator,
  asyncUpdateBarber
};