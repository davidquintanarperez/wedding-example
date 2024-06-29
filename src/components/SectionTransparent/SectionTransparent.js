import React from 'react';
import './SectionTransparent.css';

const SectionTransparent = ({id, title, sectionParagraph, content}) => {
  return (
    <section id={id} className='section-transparent'>
      <div className='text-center'>
        <h2 className='title playfair-display-font' data-aos="fade-up">{title}</h2>
        <p className='section-paragraph lora-font' data-aos="fade-up">{sectionParagraph}</p>
      </div>
      {content}
    </section>
  );
};

export default SectionTransparent;
