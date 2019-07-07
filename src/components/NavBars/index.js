import React from "react";
import "./style.css";
import { Nav, Navbar } from 'react-bootstrap';

function NavBars(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Navbar.Text>
            Click an image to begin!
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            Score: {props.score} Highscore: {props.highscore}
          </Navbar.Text>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBars;
