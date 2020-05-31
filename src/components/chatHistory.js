import React from "react";
import ChatHistoryItem from './chatHistoryItem';
import * as dateUtils from '../commons/date';


class ChatHistory extends React.Component {

  constructor(props) {
    super(props);
    this.container = React.createRef();
  }
  //   console.log(props);
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    let container = this.container.current;
    container.scrollTop = container.scrollHeight;
  }

  render() {
    let msgs = this.props.data || [];
    let items = [];
    let lastTime = 0;
    for (let i = 0; i < msgs.length; i++) {
      let msg = msgs[i];
      let datetimeStr = msg.datetime
      let time = dateUtils.stringToDate(datetimeStr);
      if (time.getTime() - lastTime > 600000) {
        lastTime = time.getTime();
        items.push((
          <div className="time" key={'time' + i}>{dateUtils.getTodayTimeOrDateTime(datetimeStr)}</div>
        ))
      }
      items.push((
        <ChatHistoryItem {...msg} toColor={this.props.toColor} key={i}></ChatHistoryItem>
      ))
    }

    return (
      <div className="chat-history" ref={this.container}>
        {/* {this.props.data.map(v => {
          return (
            <ChatHistoryItem {...v} key={v.datetime}></ChatHistoryItem>
          )
        })} */}
        {items}
      </div>
    );
  }
};

export default ChatHistory;
