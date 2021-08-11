import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useMemo,
} from "react";
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

export default function Score() {
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

      <InputForm row_num="1" />
      <InputForm row_num="2" />
      <InputForm row_num="3" />
      <InputForm row_num="4" />
      <InputForm row_num="5" />
    </Container>
  );
}

function InputForm(props: any) {
  const [score, setScore] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [sum, setSum] = useState("");

  const HandleChange = (e: any, col_num: number) => {
    let tmp = score;

    tmp[col_num] = e.target.value;
    if (tmp !== score) {
      setScore(tmp);
    }

    sumScore();
  };

  const sumScore = () => {
    setSum(
      score.reduce((x: string, y: string) => String(Number(x) + Number(y)))
    );
  };

  return (
    <Row>
      <h6>
        P{props.row_num}의 현재 점수: {sum}
      </h6>
      <InputGroup className="mb-3">
        <InputGroup.Text>P{props.row_num}</InputGroup.Text>
        <FormControl value={score[0]} onChange={(e) => HandleChange(e, 0)} />
        <FormControl value={score[1]} onChange={(e) => HandleChange(e, 1)} />
        <FormControl value={score[2]} onChange={(e) => HandleChange(e, 2)} />
        <FormControl value={score[3]} onChange={(e) => HandleChange(e, 3)} />
        <FormControl value={score[4]} onChange={(e) => HandleChange(e, 4)} />
        <FormControl value={score[5]} onChange={(e) => HandleChange(e, 5)} />
        <FormControl value={score[6]} onChange={(e) => HandleChange(e, 6)} />
        <FormControl value={score[7]} onChange={(e) => HandleChange(e, 7)} />
        <FormControl value={score[8]} onChange={(e) => HandleChange(e, 8)} />
        <FormControl value={score[9]} onChange={(e) => HandleChange(e, 9)} />
      </InputGroup>
    </Row>
  );
}
