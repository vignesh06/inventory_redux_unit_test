import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import SelectElement from '../FormElements/select'
import Col from 'react-bootstrap/Col'

function CreateorUpdateLocation(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          {/* <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement  type={'text'} inputChangeHandler={(e) => props.setlocationformData(e,'type')} label={'Type'} inputValue={props.locationform.type} inputPlaceHolder={'type'}></InputElement>
          </Col> */}
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setlocationformData(e, 'type')} label={'Name'} inputValue={props.locationform.type} inputPlaceHolder={'Name'} disable={props.disablename}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={false} type={'text'} inputChangeHandler={(e) => props.setlocationformData(e, 'description')} label={'Description'} inputValue={props.locationform.description} inputPlaceHolder={'Description'}></InputElement>
          </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default CreateorUpdateLocation;
