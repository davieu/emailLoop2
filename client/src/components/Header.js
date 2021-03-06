import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">EmailLoop</a>
          <ul>
            <li className="right">
              <a>Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// function mapStateToProps(state) {
//   return { auth: state.auth };
// }

//refactored
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
