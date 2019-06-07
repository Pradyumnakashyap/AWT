import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { stat } from 'fs';


class Nav extends Component {

  constructor(props){
    super(props)
  }

  state = {
    persontype:1
  };

  render() {
    let { location } = this.props;
    let qs = this.props.location.search.substr(1);
    this.state.persontype = qs.split('=')[1];
    
    const isUser = this.state.persontype==1;

      return (
      <ul className="nav">
          <li className={location.pathname === '/' ? 'active' : null}>
            <Link to="/">
              <i className="pe-7s-home"></i>
              <p>Home</p>
            </Link>
          </li>

          <li className={this.isPathActive('/components') || this.state.componentMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ componentMenuOpen: !this.state.componentMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Projects
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                  <li className={this.isPathActive('/addUser') ? 'active' : null}>
                  <Link to="/addUser">View Projects</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/components/grid">Project Sign up</Link>
                </li>
              </ul>
            </div>
          </Collapse>
    </li>

    <li className={location.pathname === '/Login' ? 'active' : null}>
            <Link to="/Login">
              <i className="pe-7s-user"></i>
              <p>Admin Login</p>
            </Link>
          </li>
        </ul>
      );
    }
    
        

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);