import React from 'react';
import './button.css';

const Button = ({ text}) => {
  return (
    <button class='btn'>
        {text}
    </button>
  )
}

export default Button