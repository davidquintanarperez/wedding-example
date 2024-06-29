import React from 'react';
import './MakeUp.css';
import MakeUpItem from '../MakeUpItem/MakeUpItem';
import SectionTransparent from '../SectionTransparent/SectionTransparent';

const MakeUp = ({makeUpTitle, makeUpParagraph,
  companyOne, descriptionOne, makeUpLinkOne, makeUpButtonTextOne,
  companyTwo, descriptionTwo, makeUpLinkTwo, makeUpButtonTextTwo,
  companyThree, descriptionThree, makeUpLinkThree, makeUpButtonTextThree
}) => {

    const content = (
      <div className='make-up-items d-flex justify-content-center'>
        <div className='row container d-flex justify-content-center'>
          <div className='col-12 col-md-6 col-lg-4'>
            <MakeUpItem company={companyOne} description={descriptionOne} makeUpLink={makeUpLinkOne} makeUpButtonText={makeUpButtonTextOne} />
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <MakeUpItem company={companyTwo} description={descriptionTwo} makeUpLink={makeUpLinkTwo} makeUpButtonText={makeUpButtonTextTwo} />
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <MakeUpItem company={companyThree} description={descriptionThree} makeUpLink={makeUpLinkThree} makeUpButtonText={makeUpButtonTextThree} />
          </div>      
        </div>
      </div>
    );

  return (
    <SectionTransparent title={makeUpTitle} sectionParagraph={makeUpParagraph} content={content}/>
  );
};

export default MakeUp;
