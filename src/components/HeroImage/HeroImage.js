import React, { useEffect } from 'react';
import './HeroImage.css';

const HeroImage = ({content, backgroundImage, numberHero, overlayColor}) => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
      .hero-container:nth-child(${numberHero})::before {
        background: ${overlayColor};
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [numberHero, overlayColor]); 

  return (
    <section className="hero-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        {content}
      </div>
    </section>
  );
};

export default HeroImage;
