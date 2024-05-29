import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  UPDATE_USER: 'UPDATE_USER',
};

function receiveAllUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}
function updateUserActionCreator(user) {
  return {
    type: ActionType.UPDATE_USER,
    payload: {
      user,
    }
  }
}

function asyncReceiveAllUsers() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      dispatch(receiveAllUsersActionCreator(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpdateUser({name, email}) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const user = await api.updateUser({ name, email });
      dispatch(updateUserActionCreator(user));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  }
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveAllUsersActionCreator,
  asyncRegisterUser,
  updateUserActionCreator,
  asyncReceiveAllUsers,
  asyncUpdateUser,
};
