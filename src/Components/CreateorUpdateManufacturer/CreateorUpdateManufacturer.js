import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import SelectElement from '../FormElements/select'
import Col from 'react-bootstrap/Col'

function CreateorUpdateManufacturer(props) {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement  mandatory={true} type={'text'} inputChangeHandler={(e) =>  props.setmanufacturerformData(e,'name')} label={'Name'} inputValue={props.manufacturerformData.name} inputPlaceHolder={'Name'}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={false} type={'text'} inputChangeHandler={(e) => props.setmanufacturerformData(e,'address1')} label={'Address 1'} inputValue={props.manufacturerformData.address1} inputPlaceHolder={'Address 1'}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement  mandatory={false} type={'text'} inputChangeHandler={(e) =>  props.setmanufacturerformData(e,'address2')} label={'Address 2'} inputValue={props.manufacturerformData.address2} inputPlaceHolder={'Address 2'}></InputElement>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={false} type={'text'} inputChangeHandler={(e) => props.setmanufacturerformData(e,'address3')} label={'Address 3'} inputValue={props.manufacturerformData.address3} inputPlaceHolder={'Address 3'}></InputElement>
          </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default CreateorUpdateManufacturer;
