import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Tilt from 'react-tilt'
import Card from "react-bootstrap/Card";
import './Resume.css'
const Resume = () => {
    return (
        <div id="resume">
            <h1 className="pt-5 text-center font-details-b pb-3">Resume</h1>
            <Jumbotron className="jumbo-style">
            <Tilt options={{ max: 25 }}>
                <Card>
                    <Card.Body className="d-flex justify-content-center flex-column">
                       <div>
                        <Card.Title className="text-center">Education</Card.Title>
                       </div>
                       <div>
                           <Card.Text>
                                <strong className="body-title-style">Daffodil International University</strong>
                                <br/>
                                <p>2020-2024</p>
                                <p>B.sc in Software Engineering</p>
                           </Card.Text>
                       </div>
                       <div>
                           <Card.Title className="text-center">Experience</Card.Title>
                           <strong className="body-title-style">Web Developer</strong>
                           <br/>
                           <p>January 2021 - Current</p>
                           <li>React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Stripe.js</li>
                           <li>HTML5, CSS3, Bootstrap</li>
                       </div>

                    </Card.Body>
                    
                </Card>
            </Tilt>
            </Jumbotron>
        </div>
    );
};

export default Resume;