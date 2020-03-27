import React from 'react';


const TableHeaderCell = (props) => {
  return (
    <React.Fragment>
          {props.columns.map(column => (
        <th align='centre'>{column.title}</th>
      ))}
    </React.Fragment>
  );
}

export default TableHeaderCell;