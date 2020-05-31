
import * as types from "../../constants/actionTypes";

function IsMobileReducer(state = null, action) {
  if (action.type === types.RESIZE) {
    return action.data;
  }
  return window.innerWidth <= 500;
}

export default IsMobileReducer;
