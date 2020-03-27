import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Location from '../../Components/CreateorUpdateLocation/CreateorUpdateLocation'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading/PageHeading';

function Updateuser(props) {
  const [locationform, setlocationform] = useState({ type: '', description: '' });
  const setlocationformData = (e, field) => {
    let formObject = Object.assign({}, locationform);
    formObject[field] = e.target.value;
    setlocationform({ ...locationform, ...formObject })
  }
  const UpdateLocation = async () => {
    let url = UrlConstant.Ip + UrlConstant.Location.location + "/" + props.match.params.id
    let data = await HTTPService(url, 'PUT', locationform)
    props.history.push("/admin/locations")
  }
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.Location.location + "/" + props.match.params.id
    let data = await HTTPService(url, 'get')
    setlocationform({ ...locationform, ...data })
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Update Loaction'} />
        <Location
          locationform={locationform}
          setlocationformData={(e, field) => setlocationformData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={UpdateLocation} size="md" disabled={!(locationform.type)}>Update</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="secondary" onClick={() => props.history.push("/admin/locations")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Updateuser;
