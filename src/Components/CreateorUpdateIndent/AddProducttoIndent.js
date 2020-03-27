import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import SelectElement from '../FormElements/select'
import { UrlConstant, localstorageConstants, dropDownConstants } from '../../Constants/Constants';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import HTTPService from '../../Services/HTTPService';

function AddProducttoIndent(props) {
  const [productList, setproductList] = useState([]);
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.Product.product
    setproductList(await HTTPService(url, 'get', ''))
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={3} lg={3} sm={3} xs={3}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.setProductIndentFormData(e, 'product_id')} label={'Product'} inputValue={props.productindentform.product_id} dropdownList={productList}></SelectElement>
          </Col>
          <Col md={3} lg={3} sm={3} xs={3}>
            <InputElement mandatory={true} type={'number'} inputChangeHandler={(e) => props.setProductIndentFormData(e, 'quantity')} label={'Quantity'} inputValue={props.productindentform.quantity} inputPlaceHolder={'Quantity'}></InputElement>
          </Col>
          <Col md={3} lg={3} sm={3} xs={3}>
            <InputElement mandatory={true} type={'number'} inputChangeHandler={(e) => props.setProductIndentFormData(e, 'unitPrice')} label={'Unit Price'} inputValue={props.productindentform.unitPrice} inputPlaceHolder={'Unit Price'}></InputElement>
          </Col>
          <Col md={3} lg={3} sm={3} xs={3}>

            <Button style={{ marginTop: "31px" }} variant="primary" onClick={() => props.AddProducttoIndentList()} size="md" disabled={!(props.productindentform.product_id && props.productindentform.quantity && props.productindentform.unitPrice)}>ADD</Button>&nbsp;&nbsp;&nbsp;
  </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default AddProducttoIndent;
