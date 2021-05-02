import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../../assets/img/profile/profile.png";
import Button from "react-bootstrap/Button";

import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-5 text-center font-details pb-3">About me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  src={profile}
                  thumbnail
                />
              </Row>
            </Col>

            <Col xs={12} md={6}>
              <Row>
                Hi there! I am <strong>&nbsp;Habibur Rahman</strong>
                <br />A passionate programmer, born and brought up
                in Bangladesh. I am a Full Stack Web Developer with React.js, Redux,
                Express.js, Node.js, and mongoDB as my tech stack.
                <br />
                Working with the clients, my goal is always driven towards
                providing amazing experience with the best level of quality and
                service to them.
                <br />
                Along with that, I also help people as a programmer on their journey
                of becoming a professional programmer.
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
                <br /> <br />
              </Row>
              <Row>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Lets talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1eJVc_DNBzaWzFdCLLWcSrwwpDBO41iJa/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/hrebon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/habibur-rahman-30b0741a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
