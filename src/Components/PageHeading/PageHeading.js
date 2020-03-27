import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const PageHeading = props => {
  return (
    <React.Fragment>
      <Container>
        <br />  <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h3>{props.heading}</h3>
          </Col>
        </Row> <br />
      </Container>
    </React.Fragment>
  );
};

export default PageHeading;
