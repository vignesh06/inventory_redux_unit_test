import React, { useState, useEffect } from 'react';
import HTTPService from '../../Services/HTTPService';
import { UrlConstant, localstorageConstants } from '../../Constants/Constants';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputElement from '../../Components/FormElements/inputElement'
import CreateorUpdateIndent from '../../Components/CreateorUpdateIndent/CreateorUpdateIndent'
import AddProducttoIndent from '../../Components/CreateorUpdateIndent/AddProducttoIndent'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import CustomTable from '../../Components/Table/CustomTable';
import PageHeading from '../../Components/PageHeading/PageHeading';

function UpdateIndent(props) {
  const [indentform, setindentform] = useState({ type: '', location_id: '', deliveryDate: '11/12/2019', indentLineList: [] });
  const [productindentform, setproductindentform] = useState({ product_id: '', quantity: '', unitPrice: '' })
  const [tableConfig, settableConfig] = useState([]);
  const seIndentFormData = (e, field) => {
    let formObject = Object.assign({}, indentform);
    formObject[field] = e.target.value;
    setindentform({ ...indentform, ...formObject })
  }
  const setProductIndentFormData = (e, field) => {
    let formObject = Object.assign({}, productindentform);
    formObject[field] = e.target.value;
    setproductindentform({ ...productindentform, ...formObject })
  }

  const UpdateIndent = async () => {
    let url = UrlConstant.Ip + UrlConstant.Indent.indent + "/" + props.match.params.id
    let formObject = Object.assign({}, indentform);
    formObject['deliveryDate'] = '11/12/2019';
    let data = await HTTPService(url, 'PUT', formObject)
    props.history.push("/admin/indents")
  }
  const getdata = async () => {
    let url = UrlConstant.Ip + UrlConstant.Indent.indent + "/" + props.match.params.id
    let data = await HTTPService(url, 'get')
    setindentform({ ...indentform, ...data })
  }
  useEffect(() => {
    let tabelColumnn = [
      { title: 'Product', field: 'product_id' },
      { title: 'Quantity', field: 'quantity' },
      { title: 'Unit Price', field: 'unitPrice' },
    ]
    settableConfig(tabelColumnn)
    getdata()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Update Indent'} />
        <CreateorUpdateIndent
          disabletype={true}
          indentform={indentform}
          seIndentFormData={(e, field) => seIndentFormData(e, field)}
        />
        <Row>
          {indentform.indentLineList.length > 0 ? <CustomTable columns={tableConfig} data={indentform.indentLineList} rowClick={(e) => e.preventDefault()}></CustomTable> : ''}
        </Row>
        <Row>
          <Col md={6} lg={6} sm={6} xs={6}>
            <br />
            <Button variant="primary" onClick={UpdateIndent} size="md" disabled={!(indentform.type && indentform.location_id && indentform.deliveryDate && indentform.indentLineList.length > 0)}>Update</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" onClick={() => props.history.push("/admin/indents")} size="md" >Cancel</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default UpdateIndent;
