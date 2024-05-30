import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'authUser/set',
  UNSET_AUTH_USER: 'authUser/unset',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncCheckAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    const token = api.getAccessToken();
    if (token) {
      try {
        api.putAccessToken(token);
        const authUser = await api.getOwnProfile();
        dispatch(setAuthUserActionCreator(authUser));
      } catch (error) {
        console.error(error.message);
        dispatch(unsetAuthUserActionCreator());
      }
    } else {
      dispatch(unsetAuthUserActionCreator());
    }
    dispatch(hideLoading());
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncCheckAuthUser,
};
