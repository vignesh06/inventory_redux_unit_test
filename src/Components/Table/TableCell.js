import React from 'react';


const TableCell = (props) => {
  return (
    <React.Fragment>
          {props.columns.map(column => (
        <td align='centre'>{props.data[column.field]}</td>
      ))}
    </React.Fragment>
  );
}

export default TableCell;