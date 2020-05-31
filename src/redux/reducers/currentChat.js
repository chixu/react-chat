import * as types from "../../constants/actionTypes";
import store from "../store";

function CurrentChatReducer(state = null, action) {
  if (action.type === types.LOG_IN) {
    return action.data.chatList[0];
  } else if (action.type === types.LOG_OUT) {
    return null;
  } else if (action.type === types.UPDATE_CUR_CHAT) {
    return action.data;
  } else if (action.type === types.SELECT_CHAT_ITEM) {
    // let chatList = store.getState().chatList;
    // return chatList.filter(v => v.name === action.data)[0];
    return action.data;
  } else if (action.type === types.SEND_CHAT) {
    // {"to":"User5","from":"user3","text":"hi uuuu","datetime":"20200319200212621","friends":["User5"]}
    let chatList = action.data.chatList;
    for (let v of chatList) {
      if (v.name === state.name)
        return v;
    }
  }
  return state;
}

export default CurrentChatReducer;