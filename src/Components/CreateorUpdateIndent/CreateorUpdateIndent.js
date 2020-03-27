import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../FormElements/inputElement'
import SelectElement from '../FormElements/select'
import { UrlConstant, localstorageConstants, dropDownConstants } from '../../Constants/Constants';
import Col from 'react-bootstrap/Col'
import HTTPService from '../../Services/HTTPService';

function CreateorUpdateIndent(props) {
  const [indentTypeList, setindentTypeList] = useState(dropDownConstants.IndentType);
  const [LocationList, setLocationList] = useState([]);
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.Location.location
    let Data = await HTTPService(url, 'get', '')
    let locationDropdowndata = []
    Data.forEach(function (item) {
      locationDropdowndata.push({ id: item.id, name: item.type });
    })
    setLocationList(locationDropdowndata)
  }
  useEffect(() => {
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.seIndentFormData(e, 'type')} label={'Type'} inputValue={props.indentform.type} dropdownList={indentTypeList} disable={props.disabletype}></SelectElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <SelectElement mandatory={true} selectChangeHandler={(e) => props.seIndentFormData(e, 'location_id')} label={'Location'} inputValue={props.indentform.location_id} dropdownList={LocationList}></SelectElement>
          </Col>
          <Col md={4} lg={4} sm={6} xs={6}>
            <InputElement mandatory={true} type={'date'} inputChangeHandler={(e) => props.seIndentFormData(e, 'deliveryDate')} label={'Delivery Date'} inputValue={props.indentform.deliveryDate} inputPlaceHolder={''}></InputElement>
          </Col>
        </Row>
        <br />
      </Container>
    </React.Fragment>
  );
}

export default CreateorUpdateIndent;
