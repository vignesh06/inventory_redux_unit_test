import React, { useState, useEffect } from 'react';
import HTTPService from '../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import labels from '../Constants/labels';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../Components/FormElements/inputElement'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

function Login(props) {
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  useEffect(() => {
    logout()
  }, []);
  const logout = () => {
    localStorage.setItem(
      localstorageConstants.Token,
      ""
    )
  }
  const login = async () => {
    // let url = UrlConstant.Ip + UrlConstant.login
    // let data={"userName":userName,"password":password}
    // let responsedata=await HTTPService(url, 'post',data)
    // localStorage.setItem(
    //   localstorageConstants.Token,
    //   "eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjpbXSwic3ViIjoic2hyZWVAcGFuYWluZm90ZWNoLmNvbSIsImV4cCI6MTU4MTUxODU3MCwiaWF0IjoxNTgxNTE0OTcwfQ.l26C6Oy0T0NWxGCt8iH-N4JsrVSERL21EovK2wCTH07RyDryAlcdFlvHqCO7-fUxDifgJy6oh-7H9-DlvSLb_g"
    // )
    let responsedata= await  props.login(userName,password)
    props.history.push("/admin")
  }
  return (
    <React.Fragment>
      <Container>
        <br />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <h2>Inventory Login</h2>
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
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            {/* <Button variant="primary" onClick={()=>props.login(userName,password)} size="md" disabled={!(userName && password)}>{labels.login.lbl_Login_button}</Button> <br /> <br /> */}
            <Button variant="primary" onClick={()=>login()} size="md" disabled={!(userName && password)}>{labels.login.lbl_Login_button}</Button> <br /> <br />
            <p className="mb-2 text-muted">Forgot password? <Link to="/forgotpassword">Reset</Link></p> <br />
            <p className="mb-0 text-muted">Don’t have an account? <Link to="/signup">Signup</Link></p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
const mapDispatchToProps = dispatch => {
  return {
      login: (userName,password) => dispatch(actionCreators.login(userName,password)),
  }
};

export default connect(null,mapDispatchToProps)(Login);
// export default Login;
