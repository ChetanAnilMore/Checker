import aichecker from "../../../public/AiChecker.avif";
import React from "react";
import "./about.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <div id="about" className="mt-5 bg-yellow ">
      <Container className="">
        <Row>
          <Col sm={8} className="about-text p-5 text-justify">
            One of the most challenging tasks in teaching is checking papers of
            so many students. Teachers don't has much time to check them all and
            correctly. So this is the solution where you can upload your
            question paper and it's answer. And AI will do that task for you.
            Join us in our journey to make it successful.
          </Col>
          <Col sm={4}>
            <img
              src={aichecker}
              alt="ai-checker"
              className="img-fluid w-100 h-100 p-3"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
