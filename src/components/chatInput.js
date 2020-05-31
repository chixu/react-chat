import React from "react";
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { sendMessage, emit } from '../commons/socket';
import events from '../constants/socketEvent';
import SendSVG from './icons/send';

// const Icon = () => ;
// import send from "../images/send.svg";


class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
    this.typing = false;
  }

  handleChange() {
    if (!this.typing) {
      this.typing = true;
      // socket.emit('typing');
      console.log("typing");
      emit(events.TYPING, this.props.to)
    }
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(() => {
      this.typing = false;
      emit(events.STOP_TYPING, this.props.to)
    }, 1000);
  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      if (event.shiftKey || event.ctrlKey) {

      } else {
        event.preventDefault();
        this.handleSend();
      }
    }
  }

  handleSend() {
    let msg = this.input.current.value;
    // this.props.sendChat(msg);
    this.input.current.value = "";
    sendMessage({
      text: msg,
      to: this.props.to
    });
  }
  //   console.log(props);
  render() {
    return (
      <div className="chat-input">
        <textarea type="text" rows="5" onKeyPress={this.handleKeyPress} onChange={this.handleChange} ref={this.input} placeholder="Type your message..."></textarea >
        {/* <div className="chat-input-actionbar">
          <input type="button" className="chat-input-send" value="Send" onClick={this.handleSend} ></input>
        </div> */}
        <a onClick={this.handleSend}>
          <SendSVG />
        </a>
      </div>
    )
  };
};

export default connect(null, {
  sendChat: actions.sendChat
})(ChatInput);
