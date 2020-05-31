import React from "react";
import ChatListItem from "./chatListItem";
import store from "../redux/store";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";


// {
//   name: "Bob",
//   avatar: "www.google.com",
//   lastChat: "Are you OK?",
//   lastSentBy: '21:00',
//   selected: false,
//   history: []
// }

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    // console.log("ChatList handleClick", this.props);
    // if (name !== this.props.currentChat.name) {
    this.props.select(this.props.chatList.find(v => v.name === name));
    if (this.props.onSelectChat) {
      this.props.onSelectChat();
    }
    // }
  }

  render() {
    console.log('ChatList Render');
    return (
      <div className="chat-list">
        <div className="chat-list-title">Friends</div>
        <div className="chat-list-content">
          {this.props.chatList.map((v, i) => {
            let fren = this.props.friends.find(u => u.name === v.name);
            let unread = this.props.unreads.find(u => u.from === v.name);
            console.log(v.name, fren)
            return <ChatListItem key={i} {...v}
              handleClick={this.handleClick}
              selected={this.props.currentChat.name === v.name}
              color={fren && fren.color}
              unread={unread && unread.count}
              online={this.props.room.find(u => u.name === v.name) !== undefined}
            ></ChatListItem>;
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    chatList: state.chatList,
    currentChat: state.currentChat,
    room: state.room,
    friends: state.friends,
    unreads: state.unreads,
  };
};
export default connect(mapStateToProps, { select: actions.selectChat })(ChatList);
