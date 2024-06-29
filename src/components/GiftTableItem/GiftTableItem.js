import React from 'react';
import './GiftTableItem.css';
import Button from '../Button/Button';

const GiftTableItem = ({image, giftTableLink, giftButtonText}) => {
  return (
    <div className='gift-table-item text-center' data-aos="fade-up">
      <div>
        <img src={image} alt="Ejemplo" className="bw-image" />
      </div>
      <p>Número de evento:</p>
      <p>0000000</p>
      {giftButtonText && (
        <Button buttonLink={giftTableLink} buttonText={giftButtonText} buttonClassName='light-button'/>
      )}
    </div>
  );
};

export default GiftTableItem;
