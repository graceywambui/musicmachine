// Home.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Animation duration in milliseconds
  });

  return (
    <animated.div style={fadeIn}>
      <Container fluid className="homepage">
        <Row className="h-100 align-items-center">
          <Col className="text-center">
            <h1 className="text-white">Welcome to Music Machine</h1>
            <p className="text-white">Discover the beauty of music and arts</p>
            <button className="btn btn-primary">Get Started</button>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
};

export default Home;
