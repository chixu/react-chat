import React from "react";
import * as dateUtils from "../commons/date";
import * as utils from "../commons/utils";

class ChatHistoryItem extends React.Component {

  render() {
    let props = this.props;
    // console.log(props);
    return (
      <div className={"chat-his-item chat-his-item-" + (props.me ? "right" : "left")}>
        <div className="avatar" style={props.me ? {} : { color: this.props.toColor }}>{props.me ? "Me" : utils.getShortName(props.from)}</div>
        <div className="text">{props.text}</div>
      </div>
    );
  }
};

export default ChatHistoryItem;
