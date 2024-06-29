import React from 'react';
import './GiftTable.css';
import GiftTableItem from '../GiftTableItem/GiftTableItem';
import SectionTransparent from '../SectionTransparent/SectionTransparent';

const GiftTable = ({giftTableTitle, giftTableParagraph, imageOne, giftTableLinkOne, giftButtonTextOne, imageTwo, giftTableLinkTwo, giftButtonTextTwo, 
  imageThree, giftTableLinkThree, giftButtonTextThree}) => {

    const content = (
      <div className='gift-table-items d-flex justify-content-center'>
        <div className='row container d-flex justify-content-center'>
          <div className='col-12 col-md-6 col-lg-4'>
            <GiftTableItem image={imageOne} giftTableLink={giftTableLinkOne} giftButtonText={giftButtonTextOne} />
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <GiftTableItem image={imageTwo} giftTableLink={giftTableLinkTwo} giftButtonText={giftButtonTextTwo} />
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <GiftTableItem image={imageThree} giftTableLink={giftTableLinkThree} giftButtonText={giftButtonTextThree} />
          </div>      
        </div>
      </div>
    );

  return (
    <SectionTransparent title={giftTableTitle} sectionParagraph={giftTableParagraph} content={content}/>
  );
};

export default GiftTable;
