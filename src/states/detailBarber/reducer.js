import { ActionType } from "./action";

function detailBarberRecuder(detailBarber = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_BARBER:
      return action.payload.detailBarber;
    case ActionType.CLEAR_DETAIL_BARBER:
      return null;
    default:
      return detailBarber;
  }
}

export default detailBarberRecuder;
