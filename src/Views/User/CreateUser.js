import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import User from '../../Components/CreateorUpdateuser/CreateorUpdateUser'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import PageHeading from '../../Components/PageHeading/PageHeading';

function CreateUser(props) {
  const [userform, setuserform] = useState({ userCode: '', name: '', type: "ADMIN", department: '', contactNumber: '', email: '', displayName: '', password: '' });
  const setUserFormData = (e, field) => {
    let formObject = Object.assign({}, userform);
    formObject[field] = e.target.value;
    setuserform({ ...userform, ...formObject })
  }
  const CreateUser = async () => {
    let url = UrlConstant.Ip + UrlConstant.User.user
    let data = await HTTPService(url, 'post', userform)
    props.history.push("/admin/users")
  }
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Create User'} />
        <br />
        <User
          userform={userform}
          disableUserId={false}
          setUserFormData={(e, field) => setUserFormData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={CreateUser} size="md" disabled={!(userform.userCode && userform.displayName && userform.password)}>Create</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/users")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default CreateUser;
