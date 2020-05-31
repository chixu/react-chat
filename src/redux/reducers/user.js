
import * as types from "../../constants/actionTypes";

function UserReducer(state = null, action) {
  if (action.type === types.LOG_IN) {
    return action.data.name;
  } else if (action.type === types.LOG_OUT) {
    return null;
  }
  return state;
}

export default UserReducer;
