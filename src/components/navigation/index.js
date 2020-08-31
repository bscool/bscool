import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router , Link} from 'react-router-dom';
import './index.css'

class Nav extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="white" light expand="md">
        <MDBNavbarBrand>
          <strong >BScool</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem className = "navbar-item" right>
              <MDBNavLink to="/" >Home</MDBNavLink>
            </MDBNavItem>
            
            <MDBNavItem className = "navbar-item" left>
              <MDBNavLink to="/blog">Blog</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className = "navbar-item">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Courses</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">course1</MDBDropdownItem>
                  <MDBDropdownItem href="#!">course2</MDBDropdownItem>
                  <MDBDropdownItem href="#!">course3</MDBDropdownItem>
                  <MDBDropdownItem href="#!">course4</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem className = "navbar-item" right>
              <MDBNavLink to="#!">My Account</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
            <MDBNavItem tag = "div">
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Nav