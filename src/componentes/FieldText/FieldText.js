import React from 'react';
import './FieldText.css';

export function FieldText(props){
  const placeholderModificada = `${props.placeholder}...`;

  return (
    <div className='field-text'>
      <label>{props.label}</label>
      <input
        placeholder={placeholderModificada}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

