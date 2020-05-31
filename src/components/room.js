import React from "react";
import RoomItem from "./roomItem";
import { connect } from "react-redux";
import * as actions from "../redux/actions/index";
import store from "../redux/store";
import * as utils from "../commons/utils"

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    console.log("Room handleClick", name)
    this.props.select({ name });
    if (this.props.onSelectChat) {
      this.props.onSelectChat();
    }
  }

  dummyRoom() {
    let room = [];
    for (let i = 0; i < 8; i++) {
      room.push({ name: 'user0' + i, color: utils.randomColor() })
    }
    return room;
  }

  render() {
    console.log('Room Render ', this.props.room);
    // let room = this.dummyRoom();
    let room = this.props.room;
    let username = store.getState().user;
    let items = [];
    let friends = this.props.friends;
    for (let i = 0; i < room.length; i++) {
      let v = room[i];
      if (username !== v.name && friends.find(u => u.name === v.name) === undefined) {
        items.push((
          <RoomItem key={i} {...v}
            handleClick={this.handleClick}
            selected={this.props.currentChat.name === v.name}></RoomItem>
        ))
      }
    }

    return (
      <div className="room">
        <div className="room-title">Room</div>
        <div className="room-content">
          {items}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    room: state.room,
    currentChat: state.currentChat,
    friends: state.friends
  };
};
// export default connect(mapStateToProps)(Room);
export default connect(mapStateToProps, { select: actions.selectChat })(Room);
