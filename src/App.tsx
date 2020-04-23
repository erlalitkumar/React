import "./App.css";
import {Container, Row, Col, Image} from 'react-bootstrap';

import React, {Fragment, useState} from "react";

export default function App(): JSX.Element {
  return (
    <Container fluid>
      <Row style={{background: '#302464', height:60}}></Row>
      <Row style={{background: '#302464'}}>
        <Col>
          <Row> upper row</Row>
          <Row>
          <Col>
            <Row>row one</Row>
            <Row style={{height:150,background: '#302464'}}>row two</Row>
          </Col>
          <Col style={{background: '#40427C'}}>
            <Row><img src='flower.jpeg'/></Row>
          </Col>
        </Row>
          <Row  style={{background: '#40327C'}}> lower row</Row>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{background: '#40327C'}}>
        <Col style={{background: '#40327C'}}>1 of 2</Col>
      </Row>
    </Container>
  );
}
