import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

const FunctionalComponentDemo = function () {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional Component</h1>
          <p>
            Functional Components are the primary tool in React to build a
            small, modular piece of your page.
          </p>
          <dl>
            <dt>Can use state</dt>
            <dd>
              With the "useState' hook, functinoal components can now both
              render a deipslay to the page and update the information to be
              shown.
            </dd>
            <dt>No 'this' keyword</dt>
            <dd>
              Older class componets use 'this', functional components have no
              'this' object.
            </dd>
            <dt>Can use effects</dt>
            <dd>
              With the 'useEffect' hook, functional components can perform side
              effect with any props or state changes.
            </dd>
            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nexted
              elements inside
            </dd>
          </dl>
          <h1>Functional Syntax versus Arrow Function</h1>
        </Col>
      </Row>
      <hr />
      <h1>Challenge</h1>
      <Row>
        <Col md="6">
          <HelloWorld />
        </Col>
        <Col md="6">
          <HelloWorldFatArrow />
        </Col>
      </Row>
    </Container>
  );
};

export default FunctionalComponentDemo;

const HelloWorld = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="350px"
          src="https://th.bing.com/th/id/Rf81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw"
          alt="Card Cap"
        />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>const HelloWorld = function()</pre>
          </CardText>
          <Button>Go somewhere, yo</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const HelloWorldFatArrow = () => 
  <div>
    <Card>
      <img
        width="100%"
        height="350px"
        src="https://2.bp.blogspot.com/--ooTTFbt-88/WVAKvG2VHgI/AAAAAAAAnNk/m3ZYbBw2mSACfXRMfwqMeKJ33KjIfICSACLcBGAs/s1600/fat%2Barrow.png"
        alt="Card Cap"
      />
      <CardBody>
        <CardTitle>Fat Arrow</CardTitle>
        <CardSubtitle>A JS Library</CardSubtitle>
        <CardText>
          <pre>const HelloWorld = function()</pre>
        </CardText>
        <Button>Go somewhere, man</Button>
      </CardBody>
    </Card>
  </div>
