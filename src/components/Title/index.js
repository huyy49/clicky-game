import React from "react";
import "./style.css";
import { h1, p, Col } from 'react-bootstrap'

function Title(props) {
  return (
    <>
      <Col sm="12">
        <h1 className="d-flex justify-content-center">Click Game!</h1>
      </Col>
        <Col sm="12">
          <p className="d-flex justify-content-center">Click on an image to earn points, but don't click on any more than once!</p>
      </Col>
    </>
  );
};

export default Title;
