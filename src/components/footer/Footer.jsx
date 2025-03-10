import React from "react";
// import footer from "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer text-bg-dark footer mt-0 p-5 w-100 h-100">
      <Container id="contact" className="">
        <Row>
          <Col className="text-center">
            <div className="mb-2">
              <b>Contributors</b>
            </div>
            <div>Chetan More</div>
            <div>Anurag Mishra</div>
            <div>Amrit Lodh</div>
            <div>Mayank Agrawal</div>
          </Col>
          <Col className="text-center">
            <div className="mb-2">
              <b>Email Id</b>
            </div>
            <div>chetanmore733@gmail.com</div>
            <div>anurag4me@gmail.com</div>
            <div>amritosanto00@gmail.com</div>
            <div>mayankagrawal01@gmail.com</div>
          </Col>
          <Col className="text-center">
            <div className="mb-2">
              <b>Contact No.</b>
            </div>
            <div>1234567890</div>
            <div>2345678905</div>
            <div>8976542131</div>
            <div>9125606002</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
