import React, { useState } from 'react';

const InputElement = props => {
  return (
    <React.Fragment>
      <label>{props.label}{props.mandatory ? '*' : ''}</label>
      <input
        className='form-control'
        type={props.type}
        onChange={props.inputChangeHandler}
        value={props.inputValue}
        placeholder={props.inputPlaceHolder}
        disabled={props.disable ? props.disable : false}
      ></input>
    </React.Fragment>
  );
};

export default InputElement;
