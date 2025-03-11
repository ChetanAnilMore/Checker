import React from "react";
// import footer from "./footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div className="footer text-bg-dark mt-0 p-5 w-100 h-100">
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
              <img
                src="github.png"
                alt="GitHub"
                id="github"
                style={{ maxWidth: "2rem" }}
              />{" "}
              <b>Github Link</b>
            </div>
            <div>
              <a
                href="https://github.com/ChetanAnilMore/Checker"
                className="text-white text-decoration-none"
              >
                ChetanAnilMore
              </a>
            </div>
            <div>
              <a
                href="https://github.com/anurag4me"
                className="text-white text-decoration-none"
              >
                Anurag4me
              </a>
            </div>
            <div>
              <a
                href="https://github.com/amritosanto"
                className="text-white text-decoration-none"
              >
                AmritoSanto
              </a>
            </div>
            <div>
              <a
                href="https://github.com/MayankSureshAgrawal"
                className="text-white text-decoration-none"
              >
                MayankSureshAgrawal
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
