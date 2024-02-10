import React from 'react';
import './Button.css';

export function Button({ onClick, text }) {
  return (
    <button className='custom-button' onClick={onClick}>{text}</button>
  );
}