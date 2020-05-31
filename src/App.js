import React from "react";
import "./App.scss";
import ChatList from "./components/chatList";
import Room from "./components/room";
import Mobile from "./components/mobile";
import { Provider } from "react-redux";
import store from "./redux/store";
import ChatMain from "./components/chatMain";
import Login from "./components/login";
import Menu from "./components/menu";
import { connect } from 'react-redux';
// import socket from './commons/socket';

class App extends React.Component {
  componentDidMount() {
    // var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // let html = document.getElementsByTagName("html")[0];
    // html.style.width = w + 'px';
    // html.style.height = h + 'px';
    // let body = document.getElementsByTagName("body")[0];
    // body.style.width = w + 'px';
    // body.style.height = h + 'px';
    // $("html, body").css({ "width": w, "height": h });
  }

  render() {
    let user = this.props.user;
    let isMobile = this.props.isMobile;
    let content;
    if (user) {
      if (isMobile) {
        content = <Mobile></Mobile>;
      } else {
        content = (
          <React.Fragment>
            <div className="left-panel">
              <Menu name={user}></Menu>
            </div>
            <div className="middle-panel">
              <ChatList></ChatList>
              <Room></Room>
            </div>
            <div className="right-panel">
              <ChatMain></ChatMain>
            </div>
          </React.Fragment>
        );
      }
    } else {
      content = <Login></Login>;
    }
    return (
      <div className="app">
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isMobile: state.isMobile,
  };
};
export default connect(mapStateToProps)(App);
