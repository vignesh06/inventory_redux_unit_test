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

function Products(props) {
  const [productList, setproductList] = useState([]);
  const [tableConfig, settableConfig] = useState([]);
  const getProductList = async () => {
    let url = UrlConstant.Ip + UrlConstant.Product.product
    setproductList(await HTTPService(url, 'get', ''))
    let tabelColumnn = [
      { title: 'Name', field: 'name' },
      { title: 'HSN Code', field: 'hsnCode' },
      { title: 'Category', field: 'category' },
      { title: 'Type', field: 'type' },
      { title: 'SKU', field: 'sku' },
      { title: 'Status', field: 'status' },
      { title: 'Description', field: 'description' },
      // { title: 'Manufacturer', field: 'manufacturer' },
    ]
    settableConfig(tabelColumnn)
  }
  const rowClick = (data) => {
    let id = data.id;
    props.history.push("/admin/product/" + id)
  }
  useEffect(() => {
    getProductList()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Products'} />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <span><Button variant="primary" style={{ "float": "right" }} onClick={() => props.history.push("/admin/createproduct")} size="md" >Create Product</Button></span>    &nbsp;&nbsp;&nbsp;
          </Col>
        </Row>
        <br />
        <Row>
          {productList.length > 0 ? <CustomTable columns={tableConfig} data={productList} rowClick={(data) => rowClick(data)}></CustomTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Products;
