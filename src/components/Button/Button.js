import React from 'react';
import $ from 'jquery';
import './Button.css'

const Button = ({ buttonLink, buttonText, buttonClassName}) => {
  return (
    <a className='lora-font' href={buttonLink} target='_blank' rel="noreferrer">
        <button className={buttonClassName}>{buttonText}</button>
    </a>
  );
};

export default Button;