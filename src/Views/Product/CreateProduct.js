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
import PageHeading from '../../Components/PageHeading/PageHeading';

function CreateProduct(props) {
  const [productform, setproductform] = useState({ name: '', manufacturer_id: '', category: '', hsnCode: '', sku: '', status: '', description: '' });
  const setProductFormData = async (e, field) => {
    let formObject = Object.assign({}, productform);
    formObject[field] = e.target.value;
    setproductform({ ...productform, ...formObject })
  }
  const CreateProduct = async () => {
    let url = UrlConstant.Ip + UrlConstant.Product.product
    let data = await HTTPService(url, 'post', productform)
    props.history.push("/admin/products")
  }
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Create Product'} />
        <Product
          productform={productform}
          disableUserId={false}
          setProductFormData={(e, field) => setProductFormData(e, field)}
        />
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={CreateProduct} size="md" disabled={!(productform.name && productform.manufacturer_id)} >Create</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/products")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default CreateProduct;
