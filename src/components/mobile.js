import React from "react";
import { connect } from "react-redux";
import ChatList from "./chatList";
import ChatMain from "./chatMain";
import Room from "./room";
import LogoutSVG from "./icons/logout"
import BackSVG from "./icons/back"
import Icon from "./icons/icon"
import * as socket from "../commons/socket";
// import * as actions from "../redux/actions/index";
// import { mdiArrowLeftDropCircle } from "@mdi/js";

class Mobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.selectChat = this.selectChat.bind(this);
    this.state = {
      // title: this.props.user,
      screen: "friend"
    }
  }

  handleClick() {
    if (this.state.screen == "friend") {
      socket.logout();
    } else {
      this.setState({
        screen: "friend"
      })
    }
  }

  selectChat() {
    // console.log(mdiArrowLeftDropCircle);
    this.setState({
      screen: "chat",
      // title: this.props.currentChat.name
    })
  }

  render() {
    console.log("mobile render");
    return (
      <div className="mobile">
        <div className="navbar">
          <div className="navbar-title" >{this.state.screen == "friend" ? this.props.user : this.props.currentChat.name}</div>
          <div className="navbar-logout" onClick={this.handleClick}>
            <BackSVG />
          </div>
        </div>
        {
          this.state.screen == "friend" ? (
            <div className="middle-panel">
              <ChatList onSelectChat={this.selectChat}></ChatList>
              <Room onSelectChat={this.selectChat}></Room>
            </div>
          ) : (
              <div className="right-panel">
                <ChatMain></ChatMain>
              </div>
            )
        }
      </div >
    );
  }
};

// const mapStateToProps = state => {
//   return {
//     chatList: state.chatList,
//     currentChat: state.currentChat,
//     room: state.room,
//     friends: state.friends,
//     unreads: state.unreads,
//   };
// };
// export default connect(mapStateToProps, { select: actions.selectChat })(ChatList);
const mapStateToProps = state => {
  return {
    user: state.user,
    currentChat: state.currentChat,
    // isMobile: state.isMobile,
  };
};
export default connect(mapStateToProps)(Mobile);
