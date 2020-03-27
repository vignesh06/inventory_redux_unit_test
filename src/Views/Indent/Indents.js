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

function Indents(props) {
  const [indentList, setindentList] = useState([]);
  const [tableConfig, settableConfig] = useState([]);
  const getProductList = async () => {
    let url = UrlConstant.Ip + UrlConstant.Indent.indent
    setindentList(await HTTPService(url, 'get', ''))
    let tabelColumnn = [
      { title: 'Type', field: 'type' },
      { title: 'Remarks', field: 'remarks' },
      { title: 'Status', field: 'status' },
      { title: 'Delivery Date', field: 'deliveryDate' },
    ]
    settableConfig(tabelColumnn)
  }
  const rowClick = (data) => {
    let id = data.id;
    props.history.push("/admin/indent/" + id)
  }
  useEffect(() => {
    getProductList()
  }, []);
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Indents'} />
        <Row>
          <Col md={12} lg={12} sm={12} xs={12}>
            <span><Button variant="primary" style={{ "float": "right" }} onClick={() => props.history.push("/admin/createindent")} size="md" >Create indent</Button></span>    &nbsp;&nbsp;&nbsp;
          </Col>
        </Row> <br />
        <Row>
          {indentList.length > 0 ? <CustomTable columns={tableConfig} data={indentList} rowClick={(data) => rowClick(data)}></CustomTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Indents;
