import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderContent.css';

const HeaderContent = ({husbandsName, wifeName, weddingDate, countdownTimer}) => {
    const weddingDateType = new Date(weddingDate);
    const year = weddingDateType.getFullYear();
    const month = weddingDateType.getMonth() + 1;
    const day = weddingDateType.getDate();
    const weddingDateFormatter = `${year}/${month}/${day}`;



  return (
    <section className='header-content'>
        <h1 className='great-vibes-regular-font' data-aos="fade-up">{husbandsName} &nbsp;&&nbsp; {wifeName}</h1>
        <p className='wedding-date lora-font' data-aos="fade-up">{weddingDateFormatter}</p>
        {countdownTimer}
    </section>
  );
};

export default HeaderContent;
