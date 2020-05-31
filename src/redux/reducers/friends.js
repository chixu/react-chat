// import ChatList from "../../components/chatList";
import * as types from "../../constants/actionTypes";

function FriendsReducer(state = [], action) {
  if (action.type === types.LOG_IN) {
    return action.data.friends;
  } else if (action.type === types.LOG_OUT) {
    return [];
  } else if (action.type === types.SEND_CHAT) {
    return action.data.message.friends || state;
  } else {
    return state;
  }
}

export default FriendsReducer;
