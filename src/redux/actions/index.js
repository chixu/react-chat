import * as types from "../../constants/actionTypes";

export const login = (data) => {
  return {
    type: types.LOG_IN,
    data
  };
};

export const logout = (data) => {
  return {
    type: types.LOG_OUT,
    data
  };
};


export const updateCurrentChat = (data) => {
  return {
    type: types.UPDATE_CUR_CHAT,
    data
  };
};

export const enterRoom = (data) => {
  return {
    type: types.ENTER_ROOM,
    data
  };
};

export const leaveRoom = (data) => {
  return {
    type: types.LEAVE_ROOM,
    data
  };
};

export const selectChat = (data) => {
  console.log(types.SELECT_CHAT_ITEM, data);
  return {
    type: types.SELECT_CHAT_ITEM,
    data
  };
};

export const sendChat = (data) => {
  return {
    type: types.SEND_CHAT,
    data
  };
};

export const typing = (data) => {
  return {
    type: types.TYPING,
    data
  };
};


// export default 