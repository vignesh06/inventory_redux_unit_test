import React from 'react';
import TableHeaderCell from './TableHeaderCell'

const TableHeader = (props) => {
  return (
    <React.Fragment>
       <thead>
      <tr>
      <TableHeaderCell columns={props.columns}></TableHeaderCell>
      </tr>
      </thead>
    </React.Fragment>
  );
}

export default TableHeader;