import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import Location from '../../Components/CreateorUpdateLocation/CreateorUpdateLocation'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading/PageHeading';

function CreateLocation(props) {
  const [locationform, setlocationform] = useState({ type: '', description: '' });
  const setlocationformData = (e, field) => {
    let formObject = Object.assign({}, locationform);
    formObject[field] = e.target.value;
    setlocationform({ ...locationform, ...formObject })
  }
  const CreateLocation = async () => {
    let url = UrlConstant.Ip + UrlConstant.Location.location
    let data = await HTTPService(url, 'POST', locationform)
    props.history.push("/admin/locations")
  }
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Create Loaction'} />
        <Location
          locationform={locationform}
          setlocationformData={(e, field) => setlocationformData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={CreateLocation} size="md" disabled={!(locationform.type)}>Create</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/locations")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default CreateLocation;
