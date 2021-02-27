import React, { Component } from "react";
import axios from "axios";

export default class UserInput extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChangeusername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleChangeemail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleChangepassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post(`http://localhost:5000/user`, { user })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username : &emsp;
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChangeusername}
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Email : &emsp;
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={this.handleChangeemail}
                required
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              Password : &emsp;
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.handleChangepassword}
                required
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
