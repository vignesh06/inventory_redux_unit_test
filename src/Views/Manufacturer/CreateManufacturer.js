import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import Manufacturer from '../../Components/CreateorUpdateManufacturer/CreateorUpdateManufacturer'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading/PageHeading';

function CreateManufacturer(props) {
  const [manufacturerformData, setmanufacturerformData] = useState({ name: '', address1: '', address2: '', address3: '' });
  const setmanufacturerData = (e, field) => {
    let formObject = Object.assign({}, manufacturerformData);
    formObject[field] = e.target.value;
    setmanufacturerformData({ ...manufacturerformData, ...formObject })
  }
  const CreateManufacturer = async () => {
    let url = UrlConstant.Ip + UrlConstant.Manufacturer.manufacturer
    let data = await HTTPService(url, 'POST', manufacturerformData)
    props.history.push("/admin/manufacturers")
  }
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Create Manufacturer'} />
        <Manufacturer
          manufacturerformData={manufacturerformData}
          setmanufacturerformData={(e, field) => setmanufacturerData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={CreateManufacturer} size="md" disabled={!(manufacturerformData.name)}>Create</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/manufacturers")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default CreateManufacturer;
