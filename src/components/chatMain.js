import React from "react";
import store from "../redux/store";
import { connect } from "react-redux";
import ChatHistory from "./chatHistory";
import ChatInput from "./chatInput";
import ChatMainTitle from "./chatMainTitle";
import { render } from "@testing-library/react";

class ChatMain extends React.Component {

  render() {
    //   console.log(props);
    let chat = this.props.currentChat;
    let fren = this.props.friends.find(u => u.name === chat.name)
    return (
      <div className="chat-main">
        <ChatMainTitle title={chat.name}></ChatMainTitle>
        <ChatHistory data={chat.history} toColor={fren && fren.color}></ChatHistory>
        <ChatInput to={chat.name}></ChatInput>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    currentChat: state.currentChat,
    friends: state.friends,
  };
};
// export default connect(mapStateToProps)(ChatList);
export default connect(mapStateToProps)(ChatMain);
