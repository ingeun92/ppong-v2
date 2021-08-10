import React, { Component, ChangeEvent, useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
} from "react-bootstrap";

interface scoreProps {
  num?: string;
}

interface scoreState {
  score: Array<string>;
}

class InputForm extends Component<scoreProps, scoreState> {
  constructor(props: scoreProps) {
    super(props);

    this.state = {
      score: [],
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      score: [...this.state.score, e.target.value],
    });
    console.log(this.state.score);
  };

  render() {
    return (
      <Row>
        <h6>
          P{this.props.num}의 현재 점수: {this.state.score}
        </h6>
        <InputGroup className="mb-3">
          <InputGroup.Text>P{this.props.num}</InputGroup.Text>
          <FormControl
            value={this.state.score[0]}
            onChange={this.handleChange}
          />
          <FormControl aria-label="2" />
          <FormControl aria-label="3" />
          <FormControl aria-label="4" />
          <FormControl aria-label="5" />
          <FormControl aria-label="6" />
          <FormControl aria-label="7" />
          <FormControl aria-label="8" />
          <FormControl aria-label="9" />
          <FormControl aria-label="10" />
        </InputGroup>
      </Row>
    );
  }
}

export default function score() {
  return (
    <Container fluid>
      <head>
        <title>Ppong</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <Row>
        <Col>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#score">Ppong</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#score">Score</Nav.Link>
                <Nav.Link href="#money">Money</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>

      <Row>
        <h1 className="text-center">Score</h1>
      </Row>

      <InputForm num="1" />

      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  );
}
