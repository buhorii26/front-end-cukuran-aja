import { ActionType } from "./action";

function barbersReducer(barbers = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_BARBERS:
      return action.payload.barbers;
      case ActionType.CREATE_BARBER:
        return [action.payload.barber, ...barbers];
      case ActionType.UPDATE_BARBER:
        return [action.payload.barber, ...barbers];
    default:
      return barbers;
  }
}



export default barbersReducer;