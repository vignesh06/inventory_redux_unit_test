import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import Product from '../../Components/CreateorUpdateProduct/CreateorUpdateProduct'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import CustomTable from '../../Components/Table/CustomTable';
import PageHeading from '../../Components/PageHeading/PageHeading';

function Users(props) {
  const [UsersList, setUsersList] = useState([]);
  const [tableConfig, settableConfig] = useState([]);
  const getProductList = async () => {
    let url = UrlConstant.Ip + UrlConstant.User.user
    setUsersList(await HTTPService(url, 'get', ''))
    let tabelColumnn = [
      { title: 'Name', field: 'name' },
      { title: 'Display Name', field: 'displayName' },
      { title: 'Role', field: 'role' },
      { title: 'Contact Number', field: 'contactNumber' },
      { title: 'Email', field: 'email' },
      { title: 'Active', field: 'active' }
    ]
    settableConfig(tabelColumnn)
  }
  const rowClick = (data) => {
    let id = data.id;
    props.history.push("/admin/user/" + id)
  }
  useEffect(() => {
    getProductList()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Users'} />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <span><Button variant="primary" style={{ "float": "right" }} onClick={() => props.history.push("/admin/createuser")} size="md" >Create User</Button></span>    &nbsp;&nbsp;&nbsp;
          </Col>
        </Row>
        <br />
        <Row>
          {UsersList.length > 0 ? <CustomTable columns={tableConfig} data={UsersList} rowClick={(data) => rowClick(data)}></CustomTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Users;
