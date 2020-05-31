// import ChatList from "../../components/chatList";
import * as types from "../../constants/actionTypes";

// export function getCurrentChat(list) {
//   for (let v of list) {
//     if (v.selected)
//       return v;
//   }
// }

function ChatListReducer(state = [], action) {
  if (action.type === types.LOG_IN) {
    return action.data.chatList;
  } else if (action.type === types.LOG_OUT) {
    return [];
  } else if (action.type === types.SEND_CHAT) {
    return action.data.chatList;
  }
  return state;
}

export default ChatListReducer;
