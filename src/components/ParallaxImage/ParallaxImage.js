import React from 'react';
import './ParallaxImage.css';

const ParallaxImage = ({content, backgroundImage}) => {
  return (
    <section className="parallax great-vibes-regular" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay"></div>
        <div className="content">
            {content}
        </div>
    </section>
  );
};

export default ParallaxImage;
