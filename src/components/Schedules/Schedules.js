import React, { useEffect, useState } from 'react';
import './Schedules.css';
import SectionTransparent from '../SectionTransparent/SectionTransparent';
import ScheduleItem from '../ScheduleItem/ScheduleItem';
import PhotoRepeater from '../PhotoRepeater/PhotoRepeater';


const Schedules = ({ceremonyCompleteDate, ceremonyPlace, ceremonyLocation, ceremonyLocationLink, ceremonyIcon,
  receptionCompleteDate, receptionPlace, receptionLocation, receptionLocationLink, receptionIcon, image}) => {
  

  const ceremony = <ScheduleItem icon={ceremonyIcon} scheduleEvent='Ceremonia' completeDate={ceremonyCompleteDate} place={ceremonyPlace} location={ceremonyLocation} locationLink={ceremonyLocationLink}></ScheduleItem>
  const reception = <ScheduleItem icon={receptionIcon} scheduleEvent='Recepción' completeDate={receptionCompleteDate} place={receptionPlace} location={receptionLocation} locationLink={receptionLocationLink}></ScheduleItem>
  const photoRepeater = <PhotoRepeater image={image}/>

  const content = (
    <div className='schedule-items d-flex justify-content-center'>
      <div className='container row align-items-center'>
        <div className='col-12 col-lg-4'>
          {ceremony}
        </div>
        <div className='col-12 col-lg-4 d-flex justify-content-center'>
          {photoRepeater}
        </div>
        <div className='col-12 col-lg-4'>
          {reception}
        </div>
      </div>
    </div>
  );

  return (
    <SectionTransparent id='section-schedules' content={content} />
  );
};

export default Schedules;
