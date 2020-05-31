import React from "react";
import { login } from "../commons/socket";
import ls from 'local-storage';
// import { Navbar, Nav } from 'react-bootstrap';

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.input = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      input: ls.get('user') || null
    }
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleClick() {
    console.log('login', this.state.input);
    if (this.state.input) {
      ls.set('user', this.state.input);
      login(this.state.input);
    } else {
      alert("Please enter your username");
    }
  }

  componentDidMount() {

  }

  handleKeyPress(event) {
    if (event.key == "Enter") {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className="login">
        <div className="login-box shadow">
          <div className="login-title">Welcome</div>
          <input className="username" type="text" placeholder="username" onKeyPress={this.handleKeyPress} onChange={this.handleInputChange} value={this.state.input}></input>
          <a className="button" onClick={this.handleClick}>Login</a>
        </div>
      </div>
    );
  }
}

export default Login;
