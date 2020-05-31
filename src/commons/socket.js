import openSocket from 'socket.io-client';
import events from '../constants/socketEvent';
import * as actions from '../redux/actions/index';
import store from "../redux/store";

const projectName = 'cr';
var socket;
// function subscribeToTimer(cb) {
//   socket.on('timer', timestamp => cb(null, timestamp));
//   socket.emit('subscribeToTimer', 1000);
// }
const eventHandles = {};
const eventErrorHandles = {};
var messages = [];


function parseChatList(username) {
  let msgs = messages;
  // let username = store.getState().user;
  username = username || store.getState().user;
  let chatlist = [];
  for (let i = 0; i < msgs.length; i++) {
    let data = msgs[i];
    let me = data.from === username;
    let othername = me ? data.to : data.from;
    let user = chatlist.filter(u => u.name === othername)[0];
    // console.log(user, othername);
    if (user === undefined) {
      user = {
        name: othername,
        history: []
      }
      chatlist.push(user);
    }
    data.me = me;
    user.lastChat = data.text;
    // user.lastSentBy = data.datetime.substr(8, 2) + ':' + data.datetime.substr(10, 2);
    user.lastSentBy = data.datetime;
    user.history.push(data);
  }
  chatlist.sort((a, b) => parseInt(b.lastSentBy) - parseInt(a.lastSentBy));
  return chatlist;
}

export function logout() {
  console.log('logout');
  store.dispatch(actions.logout());
  socket.close();
  socket = undefined;
}

export function login(name) {
  init(() => {
    emit(events.LOG_IN, name);
    on(events.LOG_IN, data => {
      console.log('login received', data);
      messages = data.messages;
      let chatList = parseChatList(data.name);
      // store.dispatch(actions.updateChatList(chatList));
      // store.dispatch(actions.updateCurrentChat(chatList[0]));
      // store.dispatch(actions.updateRoom(data.room));
      // store.dispatch(actions.login(data.name));
      store.dispatch(actions.login({
        ...data, chatList
      }));
    }, err => {
      alert(err);
    });
    on(events.SEND_CHAT, data => {
      console.log(events.SEND_CHAT, data);
      messages.push(data);
      let chatList = parseChatList();
      let currentChatName = store.getState().currentChat.name;
      let username = store.getState().user;
      // {"to":"User5","from":"user3","text":"hi uuuu","datetime":"20200319200212621","friends":["User5"]}
      store.dispatch(actions.sendChat({ chatList, currentChatName, message: data, username }));
    })
    on(events.TYPING, data => {
      store.dispatch(actions.typing({ from: data, typing: true }));
    })
    on(events.STOP_TYPING, data => {
      store.dispatch(actions.typing({ from: data, typing: false }));
    })
    on(events.ENTER_ROOM, data => {
      store.dispatch(actions.enterRoom(data));
    })
    on(events.LEAVE_ROOM, data => {
      store.dispatch(actions.leaveRoom(data));
    })
  })
}

export function sendMessage(data) {
  emit(events.SEND_CHAT, data);
}

export function on(event, cb, errCb) {
  eventHandles[event] = cb;
  eventErrorHandles[event] = errCb;
}

export function emit(event, data) {
  data = data === undefined ? "" : data;
  socket.emit('event', {
    name: event,
    data: JSON.stringify(data)
  });
}

export function init(cb) {
  // socket = openSocket('http://localhost:6600/' + projectName);
  socket = openSocket(window.location.hostname + ':6600/' + projectName);
  socket.on('connect', () => {
    console.log('socket connect');
    cb && cb();
  });
  socket.on('event', data => {
    console.log('socketevent', data);
    if (data.error) {
      console.warn('socket error', data.error);
      eventErrorHandles[data.name] && eventErrorHandles[data.name](data.error);
    } else {
      eventHandles[data.name] && eventHandles[data.name](JSON.parse(data.data));
    }
  });
}

// export { subscribeToTimer };