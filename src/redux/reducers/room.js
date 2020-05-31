import * as types from "../../constants/actionTypes";

function RoomReducer(state = [], action) {
  if (action.type === types.LOG_IN) {
    return action.data.room;
  } else if (action.type === types.LOG_OUT) {
    return [];
  } else if (action.type === types.ENTER_ROOM) {
    let name = action.data.name;
    if (!state.find(v => v.name === name)) {
      state.push(action.data);
      return [...state];
    }
  } else if (action.type === types.LEAVE_ROOM) {
    for (let i = 0; i < state.length; i++) {
      if (state[i].name === action.data) {
        state.splice(i, 1);
        return [...state];
      }
    }
  }
  return state;
}

export default RoomReducer;
