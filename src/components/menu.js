import React from "react";
import LogoutSVG from "./icons/logout"
import * as utils from "../commons/utils"
import * as socket from "../commons/socket";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    socket.logout();
  }

  render() {
    return (
      <div className="menu">
        <div className="avatar">{utils.getShortName(this.props.name)}</div>
        <div onClick={this.handleClick}>
          <LogoutSVG />
        </div>
      </div>
    );
  }
};

export default Menu;
