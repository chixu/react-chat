import * as types from "../../constants/actionTypes";
import { emit } from "../../commons/socket";
import events from "../../constants/socketEvent";

function UnreadMessageReducer(state = [], action) {
  if (action.type === types.LOG_IN) {
    let currentChatName = action.data.chatList[0].name;
    //read currentChatName message
    let unreads = action.data.unreads;
    for (let i = 0; i < unreads.length; i++) {
      if (unreads[i].from === currentChatName) {
        unreads.splice(i, 1);
        emit(events.READ, currentChatName);
        break;
      }
    }
    return unreads;
  } else if (action.type === types.LOG_OUT) {
    return [];
  } else if (action.type === types.SEND_CHAT) {
    let msg = action.data.message;
    let chatname = action.data.currentChatName;
    let self = action.data.username;
    if (msg.from !== self && msg.from !== chatname) {
      let unread = state.find(v => v.from === msg.from);
      if (unread) {
        unread.count++;
        emit(events.UNDREAD, msg.from);
        return [...state]
      } else {
        state.push({ from: msg.from, count: 1 });
        emit(events.UNDREAD, msg.from);
        return [...state]
      }
    }
  } else if (action.type === types.SELECT_CHAT_ITEM) {
    let name = action.data.name;
    for (let i = 0; i < state.length; i++) {
      if (state[i].from === name) {
        state.splice(i, 1);
        emit(events.READ, name);
        return [...state];
      }
    }
  }
  return state;
}

export default UnreadMessageReducer;
