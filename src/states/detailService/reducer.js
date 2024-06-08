import { ActionType } from "./action";

function detailServiceRecuder(detailService = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_SERVICE:
      return action.payload.detailService;
    case ActionType.CLEAR_DETAIL_SERVICE:
      return null;
    default:
      return detailService;
  }
}

export default detailServiceRecuder;
