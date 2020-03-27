import React, { useState, useEffect } from 'react';
import CustomTable from '../Components/Table/CustomTable';
import HTTPService from '../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../Components/FormElements/inputElement'
import applicationRoutes from '../ApplicationRoutes'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar'
import Dashboard from "../Views/DashBoard/Dashboard.js";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function Admin(props) {
  const switchRoutes = () => {
    let Routes = (
      <Switch>
        {applicationRoutes.map((prop, key) => {
          if (prop.layout === "/admin") {
            return (
              <Route exact
                path={prop.layout + prop.path}
                component={prop.component}
                key={"route-" + "path-" + prop.path + "-" + key}
              />
            );
          }
        })}
        <Redirect
          from={"/admin"}
          to={"/admin/dashboard"}
          exact
        />
      </Switch>);

    return Routes;
  };
  const [islogin, setislogin] = useState(false);
  useEffect(() => {
    // if (localStorage.getItem(localstorageConstants.Token)) {
    //   setislogin(true)
    // } else {
    //   setislogin(false)
    //   props.history.push("/login")
    // }
    if (props.token) {
      setislogin(true)
    } else {
      setislogin(false)
      props.history.push("/login")
    }
  }, []);
  return (
    <React.Fragment>
      {props.token ?
        <React.Fragment>
          <Navbar></Navbar>
          {<Container>{switchRoutes()}</Container>}
        </React.Fragment>
        : ''}
    </React.Fragment>
  );
}const mapStateToProps = state => {
  return {
      token: state.login.loginToken,
  }
};

export default connect(mapStateToProps, null)(Admin);
// export default Admin;
