import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_SERVICES: 'RECEIVE_SERVICES',
  CREATE_SERVICE: 'CREATE_SERVICE',
  UPDATE_SERVICE: 'UPDATE_SERVICE'
};

function receiveServicesActionCreator(services) {
  return {
    type: ActionType.RECEIVE_SERVICES,
    payload: {
      services,
    },
  };
}

function createServiceActionCreator(service) {
  return {
    type: ActionType.CREATE_SERVICE,
    payload: {
      service,
    },
  };
}

function updateServiceActionCreator(service) {
  return {
    type: ActionType.UPDATE_SERVICE,
    payload: {
      service,
    }
  }
}

function asyncReceiveServices() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const services = await api.getAllServices();
      dispatch(receiveServicesActionCreator(services));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateService({ serviceName, price }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const service = await api.createService({ serviceName, price });
      dispatch(createServiceActionCreator(service));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}
function asyncUpdateService({ serviceName, price }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const service = await api.updateService({ serviceName, price });
      dispatch(updateServiceActionCreator(service));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveServicesActionCreator,
  asyncReceiveServices,
  createServiceActionCreator,
  asyncCreateService,
  updateServiceActionCreator,
  asyncUpdateService
};