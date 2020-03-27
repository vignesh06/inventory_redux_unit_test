import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import SelectElement from '../FormElements/select'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import HTTPService from '../../Services/HTTPService';

function CreateorUpdateProduct(props) {
  const [manufacturerList, setmanufacturerList] = useState([]);
  const [categoryList, setcategoryList] = useState([]);
  const [statusList, setstatusList] = useState([]);
  const getdata = async () => {
    let urlmanufacturerList = UrlConstant.Ip + UrlConstant.Manufacturer.manufacturer
    // let urlcategoryList = UrlConstant.Ip + UrlConstant.categoryList
    // let urlstatusList = UrlConstant.Ip + UrlConstant.statusList
    setmanufacturerList(await HTTPService(urlmanufacturerList, 'get', ''))
    // setcategoryList(await HTTPService(urlcategoryList, 'get', ''))
    // setstatusList(await HTTPService(urlstatusList, 'get', ''))
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setProductFormData(e, 'name')} label={'Name'} inputValue={props.productform.name} inputPlaceHolder={'name'} disable={props.disableUserId}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.setProductFormData(e, 'manufacturer_id')} label={'Manufacturer'} inputValue={props.productform.manufacturer_id} dropdownList={manufacturerList}></SelectElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.setProductFormData(e, 'category')} label={'Category'} inputValue={props.productform.category} dropdownList={categoryList}></SelectElement>
          </Col>

        </Row>
        <br />
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setProductFormData(e, 'hsnCode')} label={'Hsn Code'} inputValue={props.productform.hsnCode} inputPlaceHolder={'Hsn Code'} disable={props.disableHsnCode}></InputElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'text'} inputChangeHandler={(e) => props.setProductFormData(e, 'sku')} label={'SKU'} inputValue={props.productform.sku} inputPlaceHolder={'SKU'}></InputElement>
          </Col>
          {/* <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.setProductFormData(e,'status')} label={'Status'} inputValue={props.productform.status} dropdownList={statusList}></SelectElement>
          </Col> */}
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={false} type={'text'} inputChangeHandler={(e) => props.setProductFormData(e, 'description')} label={'Description'} inputValue={props.productform.description} inputPlaceHolder={'Description'}></InputElement>
          </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default CreateorUpdateProduct;
