import React from "react";
import { NavLink, Link } from "react-router-dom";

import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import invidLogo from "@/assets/img/imagineDifferent.png";
import Logout from "../Logout";

class Nav extends React.Component {
  // componentDidMount() {
  //   const token = this.props.user;
  //   console.log(token);
  //   const user = token.
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/main" className="logo navItem">
                <section className="wrapper">
                  <img
                    style={{
                      width: 300,
                      height: 50
                    }}
                    src={invidLogo}
                    alt="img"
                  />
                </section>
              </NavLink>
            </li>
          </ul>
          <SearchInput />
          <p>{this.props.user.user_name}</p>
          <NavLink to="/user/upload">
            <button type="button" className="btn btn-outline-primary">
              Upload
            </button>
          </NavLink>
          <Logout />
        </nav>
      </div>
    );
  }
}

const stateToProps = state => ({
  user: state.loginReducer.user
});

export default connect(stateToProps)(Nav);
