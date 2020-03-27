import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import User from '../../Components/CreateorUpdateuser/CreateorUpdateUser'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import PageHeading from '../../Components/PageHeading/PageHeading';

function Updateuser(props) {
  const [userform, setuserform] = useState({ userCode: '', name: '', type: "ADMIN", department: '', contactNumber: '', email: '', displayName: '', password: '' });
  const setUserFormData = async (e, field) => {
    let formObject = Object.assign({}, userform);
    formObject[field] = e.target.value;
    setuserform({ ...userform, ...formObject })
  }
  const UpdateUserData = async () => {
    let url = UrlConstant.Ip + UrlConstant.User.user + "/" + props.match.params.id
    let data = await HTTPService(url, 'PUT', userform)
    props.history.push("/admin/users")
  }
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.User.user + "/" + props.match.params.id
    let data = await HTTPService(url, 'get', '')
    setuserform({ ...userform, ...data })
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Update User'} />
        <br />
        <User
          userform={userform}
          disableUserId={true}
          setUserFormData={(e, field) => setUserFormData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={UpdateUserData} size="md" disabled={!(userform.userCode && userform.displayName && userform.password)}>Update</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/users")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Updateuser;
