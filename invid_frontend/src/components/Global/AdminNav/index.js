import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
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
          <Logout />
        </nav>
        <h3 className="text-center text-primary font-weight-bold">
          ADMIN AREA
        </h3>
      </div>
    );
  }
}

const stateToProps = state => ({
  user: state.loginReducer.user
});

export default connect(stateToProps)(Nav);
