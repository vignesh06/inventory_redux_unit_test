import React, { useState } from 'react';

const SelectElement = props => {
  return (
    <React.Fragment>
      <label>{props.label}{props.mandatory ? '*' : ''}</label>
      <select
        className='form-control'
        onChange={props.selectChangeHandler}
        value={props.inputValue}
        disabled={props.disable ? props.disable : false}
      >
        <option selected disabled value=''>---Please select---</option>
        {props.dropdownList.map((data, i) => {
          return (
            <option value={data.id} key={i}>
              {data.name}
            </option>
          );
        })}
      </select>
    </React.Fragment>
  );
};

export default SelectElement;
