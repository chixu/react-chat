import { combineReducers } from "redux";
import ChatListReducer from "./chatList";
import CurrentChatReducer from "./currentChat";
import RoomReducer from "./room";
import UserReducer from "./user";
import FriendsReducer from "./friends";
import TypingReducer from "./typing";
import UnreadMessageReducer from "./unreadMessage";
import IsMobileReducer from "./isMobile";

export default combineReducers({
  chatList: ChatListReducer,
  currentChat: CurrentChatReducer,
  room: RoomReducer,
  user: UserReducer,
  friends: FriendsReducer,
  unreads: UnreadMessageReducer,
  typing: TypingReducer,
  isMobile: IsMobileReducer,
});
