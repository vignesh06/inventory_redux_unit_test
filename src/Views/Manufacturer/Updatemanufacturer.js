import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Manufacturer from '../../Components/CreateorUpdateManufacturer/CreateorUpdateManufacturer'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading/PageHeading';

function UpdateManufacturer(props) {
  const [manufacturerformData, setmanufacturerformData] = useState({ name: '', address1: '', address2: '', address3: '' });
  const setmanufacturerData = (e, field) => {
    let formObject = Object.assign({}, manufacturerformData);
    formObject[field] = e.target.value;
    setmanufacturerformData({ ...manufacturerformData, ...formObject })
  }
  const UpdateManufacturer = async () => {
    let url = UrlConstant.Ip + UrlConstant.Manufacturer.manufacturer + "/" + props.match.params.id
    let data = await HTTPService(url, 'PUT', manufacturerformData)
    props.history.push("/admin/manufacturers")
  }
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.Manufacturer.manufacturer + "/" + props.match.params.id
    let data = await HTTPService(url, 'get')
    setmanufacturerformData({ ...manufacturerformData, ...data })
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Update Manufacturer'} />
        <Manufacturer
          manufacturerformData={manufacturerformData}
          setmanufacturerformData={(e, field) => setmanufacturerData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={UpdateManufacturer} size="md" disabled={!(manufacturerformData.name)}>Update</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="secondary" onClick={() => props.history.push("/admin/manufacturers")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UpdateManufacturer;
