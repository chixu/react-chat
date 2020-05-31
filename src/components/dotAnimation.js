import React from "react";

class DotAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.tick = 0;
    this.state = {
      text: 'is Typing .'
    }
    // if (props.istyping);
    // this.timer = setInterval(() => {
    //   this.tick = (this.tick + 1) % 3;
    //   if (this.)
    //     this.setState({

    //     })
    // }, 300);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick = (this.tick + 1) % 3;
      let str = 'is Typing ';
      for (let i = 0; i <= this.tick; i++) {
        str += '.';
      }
      console.log(str);
      this.setState({
        text: str
      });
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <span>
        {this.state.text}
      </span>
    );
  }
};
// export default connect(mapStateToProps)(ChatList);
export default DotAnimation;
