import { ActionType } from "./action";

function servicesReducer(services = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_SERVICES:
      return action.payload.services;
      case ActionType.CREATE_SERVICE:
        return [action.payload.services, ...services];
      case ActionType.UPDATE_BARBER:
        return services.map(service => 
          service.id === action.payload.service.id ? action.payload.service : service
        );
    default:
      return services;
  }
}



export default servicesReducer;