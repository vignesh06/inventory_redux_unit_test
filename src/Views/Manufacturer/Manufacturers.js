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

function Manufacturers(props) {
  const [ManufacturerList, setManufacturerList] = useState([]);
  const [tableConfig, settableConfig] = useState([]);
  const getProductList = async () => {
    let url = UrlConstant.Ip + UrlConstant.Manufacturer.manufacturer
    setManufacturerList(await HTTPService(url, 'get', ''))
    let tabelColumnn = [
      { title: 'Name', field: 'name' },
      { title: 'Address 1', field: 'address1' },
      { title: 'Address 2', field: 'address2' },
      { title: 'Address 3', field: 'address3' },
    ]
    settableConfig(tabelColumnn)
  }
  const rowClick = (data) => {
    let id = data.id;
    props.history.push("/admin/manufacturer/" + id)
  }
  useEffect(() => {
    getProductList()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Manufacturers'} />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <span><Button variant="primary" style={{ "float": "right" }} onClick={() => props.history.push("/admin/createmanufacturer")} size="md" >Create Manufacturer</Button></span>    &nbsp;&nbsp;&nbsp;
          </Col>
        </Row>
        <br />
        <Row>
          {ManufacturerList.length > 0 ? <CustomTable columns={tableConfig} data={ManufacturerList} rowClick={(data) => rowClick(data)}></CustomTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Manufacturers;
