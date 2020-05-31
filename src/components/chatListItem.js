import React from "react";
import * as utils from "../commons/utils";
import * as dateUtils from "../commons/date";

class ChatListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.select(this.props.name);
    this.props.handleClick(this.props.name)
  }

  render() {
    //   console.log(props);
    // let color = randomColor();
    // let color = utils.randomColor();
    // "#" +
    // Math.floor(Math.random() * 10) +
    // Math.floor(Math.random() * 10) +
    // Math.floor(Math.random() * 10);
    let props = this.props;
    // console.log("ChatListItem render", props);
    return (
      <div className={"chat-item " + (props.selected ? "chat-item-selected" : "")} onClick={this.handleClick}>
        <div className="avatar" style={{ color: props.color }}>
          {utils.getShortName(props.name)}
          {
            props.online && (<div className="online"></div>)
          }
        </div>
        <div className="right">
          <div className="top">{props.name}</div>
          <div className="mid">{utils.getShortChat(props.lastChat)}</div>
          <div className="bottom">{dateUtils.getTodayTimeOrDateTime(props.lastSentBy)}</div>
          {props.unread && <div className="bubble">{props.unread}</div>}
        </div>
      </div>
    );
  }
};

// const mapStateToProps = state => {
//   return { chatList: state.chatList };
// };

// const mapActionToProps = state => {
//   return { select: actions.selectChatList };
// };

// export default connect(null, { select: actions.selectChatList })(ChatListItem);
export default ChatListItem;
