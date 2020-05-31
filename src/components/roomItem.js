import React from "react";
import * as utils from '../commons/utils';

class RoomItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.name)
  }

  render() {
    let props = this.props;
    return (
      <div className={"room-item " + (props.selected ? "room-item-selected" : "")} onClick={this.handleClick}>
        <div className="avatar" style={{ color: props.color }}>
          {utils.getShortName(props.name)}
        </div>
        <div className="right">{props.name}</div>
      </div>
    );
  }
};

export default RoomItem;
