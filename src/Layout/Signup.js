import React, { useState, useEffect } from 'react';
import HTTPService from '../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../Components/FormElements/inputElement'
import CreateUser from '../Components/CreateorUpdateuser/CreateorUpdateUser'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function SignUp(props) {
  const [userform, setuserform] = useState({ userCode: '', name: '', type: "ADMIN", department: '', contactNumber: '', email: '', displayName: '', password: '' });
  const [roleList, setroleList] = useState([]);
  const [departmentlist, setdepartmentlist] = useState([]);
  const signup = async () => {
    let url = UrlConstant.Ip + UrlConstant.User.user
    let data = await HTTPService(url, 'post', userform)
    localStorage.setItem(
      localstorageConstants.Token,
      "allow"
    )
    props.history.push("/admin")
  }
  const setUserFormData = (e, field) => {
    let formObject = Object.assign({}, userform);
    formObject[field] = e.target.value;
    setuserform({ ...userform, ...formObject })
  }
  return (
    <React.Fragment>
      <Container>
        <br />  <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Sign Up</h2>
          </Col>
        </Row>
        <br />
        <CreateUser
          userform={userform}
          disableUserId={false}
          setUserFormData={(e, field) => setUserFormData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={signup} size="md" disabled={!(userform.userId && userform.role && userform.department && userform.displayname)}>Sign Up</Button> <br /> <br />
            <br /> <br /><p className="mb-0 text-muted">Allready have an account? <Link to="/login">Login</Link></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default SignUp;
