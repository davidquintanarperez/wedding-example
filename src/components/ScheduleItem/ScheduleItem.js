import React from 'react';
import './ScheduleItem.css';
import Button from '../Button/Button';

const ScheduleItem = ({icon, scheduleEvent, completeDate, place, location, locationLink}) => {
    const date = new Date(completeDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()

  return (
    <div className='schedule-item text-center' data-aos="fade-up">
        <div>{icon}</div>
        <h3 className='playfair-display-font'>{scheduleEvent}</h3>
        <p className='lora-font date'>{year}.{month}.{day}</p>
        <p className='lora-font place'>{place}</p>
        <p className='lora-font location'>{location}</p>
        <p className='lora-font hour'>{hour}:{minutes}</p>
        <Button buttonLink={locationLink} buttonText='Ver ubicación' buttonClassName='light-button' />
    </div>
  );
};

export default ScheduleItem;
