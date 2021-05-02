import React from "react";
import "./Projects.css";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import Salon from "../../assets/img/projects/Salon.png";
import DailyShop from "../../assets/img/projects/DailyShop.png";
import Club from "../../assets/img/projects/Club.png";
import Rider from "../../assets/img/projects/Rider.png";

import L_REACT from "../../assets/img/skills/react.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className=" pt-5 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="HR-SalonShop"
            src={Salon}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is online salon shop.
                        User can see salon services and booked this service.
                        This website had admin panel. Admin can add new services
                        for their shop. On the other hand, this website had one
                        more special feature that is user can do reviews.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Responsive on desktop and mobile devices.</li>
                          <li>admin and user base</li>
                          <li>
                            Admin add new services and remove any services
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://hr-salon.web.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrebon/HR-Salon-Shop"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/channel/UC69glwCU7WgbjyxLlTdbreQ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="HR-DailyShop"
            src={DailyShop}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>This is a website for daily
                        life use full product shop. you can book your product on
                        this website and you see your booklist. Admin can add a
                        new product for sales in this website. This website had
                        firebase authentication.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can buy products</li>
                          <li>Admin can add product</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://hr-dailyshop.web.app/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrebon/HR-DailyShop"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/channel/UC69glwCU7WgbjyxLlTdbreQ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="Football Club"
            src={Club}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a football club
                        website. This website saw lots of club names. If the
                        user chooses or click explore button, then saw this club
                        with all details information that the user can see. It's
                        route based website.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Click explore button to see club details.</li>
                          <li>Use different route for club.</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://604a519426960a064223f719--kind-visvesvaraya-8d0a67.netlify.app/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrebon/Club"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/channel/UC69glwCU7WgbjyxLlTdbreQ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            date="01/10/2020"
            className="text-center"
            text="HR-Rider"
            src={Rider}
            alt="React ToDo App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Ride base
                        website.User choose their ride service any vehicles.
                        This website had google sign method.This website use
                        google map service for the user destination.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Choose any vehicles for ride</li>
                          <li>Firebase authentication</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://hr-riders.web.app/home"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrebon/HR-Riders"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.youtube.com/channel/UC69glwCU7WgbjyxLlTdbreQ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
