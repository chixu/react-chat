import * as types from "../../constants/actionTypes";

function TypingReducer(state = [], action) {
  if (action.type === types.TYPING) {
    let name = action.data.from;
    let idx = state.indexOf(name);
    if (action.data.typing) {
      if (idx === -1) {
        state.push(name);
        return [...state];
      }
    } else {
      if (idx !== -1) {
        state.splice(idx, 1);
        return [...state];
      }
    }
    return state;
  } else {
    return state;
  }
}

export default TypingReducer;
