import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from './../../assets/logo.png';
// import './AccoutHome.css';

class Navigationunlog extends Component {
  render() {
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <img
            alt=""
            src={Logo}
            width="100"
            className="d-inline-block align-top"
            />



        </Navbar>
        </>
    );
  }
}

export default Navigationunlog;
