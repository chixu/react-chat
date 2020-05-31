import React from "react";
import { connect } from "react-redux";
import DotAnimation from "./dotAnimation";

class ChatMainTitle extends React.Component {
  constructor(props) {
    super(props);
    this.tick = 0;
    // this.state = {

    // }
    // if (props.istyping);
    // this.timer = setInterval(() => {
    //   this.tick = (this.tick + 1) % 3;
    //   if (this.)
    //     this.setState({

    //     })
    // }, 300);
  }

  componentWillUpdate() {

  }

  componentWillUnmount() {
    console.log('ChatMainTitle Unmount');
  }

  render() {
    console.log('ChatMainTitle render');
    let title = this.props.title;
    let istyping = this.props.typing.indexOf(title) !== -1;
    return (
      <div className="chat-main-title">
        <div>{this.props.title}</div>
        <div className="typing">{istyping ? <DotAnimation /> : ""}</div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    typing: state.typing,
  };
};
// export default connect(mapStateToProps)(ChatList);
export default connect(mapStateToProps)(ChatMainTitle);
