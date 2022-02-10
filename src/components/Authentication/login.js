import React, { Component } from "react";
import { connect } from "react-redux";
import { Link ,withRouter} from "react-router-dom";
import * as actions from '../../actions/CustomAction';
import history from '../../history'

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  render() {
    const _login = () => {
      console.log(this.state);
      this.props.login(this.state).then(()=>{
        this.props.history.push("/")
      })
    };
    return (
      <>
        <div class="pattern">
          <span class="red"></span>
          <span class="indigo"></span>
          <span class="blue"></span>
          <span class="green"></span>
          <span class="orange"></span>
        </div>
        <div className="auth-main particles_js">
          <div className="auth_div vivify popIn">
            <div className="auth_brand">
              <Link className="navbar-brand" to="/">
                <img
                  src="../assets/images/icon.png"
                  // width="30"
                  // height="30"
                  className="d-block align-top mr-2"
                  alt="Coverage logo"
                />
              </Link>
            </div>
            <div className="card">
              <div className="body">
                <p className="lead">Admin Login</p>
                <form
                  className="form-auth-small m-t-20"
                  onSubmit={(e) => {
                    e.preventDefault();
                    _login();
                  }}
                >
                  <div className="form-group">
                    <label
                      htmlFor="signin-email"
                      className="control-label sr-only"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control round"
                      id="signin-email"
                      defaultValue="user@domain.com"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="signin-password"
                      className="control-label sr-only"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control round"
                      id="signin-password"
                      defaultValue="thisisthepassword"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-round btn-block"
                  >
                    LOGIN
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div id="particles-js"></div>
        </div>
      </>
    );
  }
}

export default connect(null, actions)(withRouter(Login));
