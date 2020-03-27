import React, { useState, useEffect } from 'react';
import HTTPService from '../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../Components/FormElements/inputElement'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const login = async () => {
    let url = UrlConstant.Ip + UrlConstant.filterData
    // settabelData(await HTTPService(url, 'get', ''))
  }
  return (
    <React.Fragment>
      <Container>
        <br />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Reset Password</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'text'} inputChangeHandler={(e) => setuserName(e.target.value)} label={''} inputValue={userName} inputPlaceHolder={'User name'}></InputElement>
          </Col>

        </Row>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'password'} inputChangeHandler={(e) => setpassword(e.target.value)} label={''} inputValue={password} inputPlaceHolder={'Password'}></InputElement>
          </Col>
        </Row>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement type={'password'} inputChangeHandler={(e) => setconfirmPassword(e.target.value)} label={''} inputValue={confirmPassword} inputPlaceHolder={'Confirm Password'}></InputElement>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={login} size="md" disabled={!((userName && password && confirmPassword) && (password == confirmPassword))}>Reset</Button>
            <br /> <br /><p className="mb-0 text-muted">Allready have an account? <Link to="/login">Login</Link></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ForgotPassword;
