import React from 'react';
import './PhotoRepeater.css';

const PhotoRepeater = ({image}) => {
  return (
    <div className='photo-repeater' data-aos="fade-up">
        <div className="background-div mirror-effect" style={{ backgroundImage: `url(${image})` }} >
        <div></div>
        </div>
    </div>
  );
};

export default PhotoRepeater;
