import React from 'react';
import './MakeUpItem.css';
import Button from '../Button/Button';

const MakeUpItem = ({company, description, makeUpLink, makeUpButtonText}) => {
  return (
    <div className='make-up-item text-center' data-aos="fade-up">
      <h3 className='lora-font'>{company}</h3>
      <p className='lora-font'>{description}</p>
      <Button buttonLink={makeUpLink} buttonText={makeUpButtonText} buttonClassName='light-button'/>
    </div>
  );
};

export default MakeUpItem;
