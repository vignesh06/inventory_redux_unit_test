import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import PageHeading from '../../Components/PageHeading/PageHeading';


function Dashboard(props) {
  return (
    <React.Fragment>
      <Container>
        <PageHeading heading={'Dashboard'} />
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
