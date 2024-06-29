import React from 'react';
import './Ticket.css';
import Button from '../Button/Button';

const Ticket = ({weddingDate, location, dressCode, locationLink}) => {

    const fecha = new Date(weddingDate);
    
    // Obtener los componentes de la fecha
    const año = fecha.getFullYear();
    const mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, sumamos 1
    const dia = fecha.getDate();
    const hora = fecha.getHours()
    const minites = fecha.getMinutes()

  return (
    <div className='ticket d-flex justify-content-center' data-aos="fade-up">
        <div>
            <h3 className='playfair-display-font'>Welcome boat party</h3>
            <p className='date lora-font'>{dia}.{mes}.{año}</p>
            <p className='location lora-font'>{location}</p>
            <p className='hour'>{hora}:{minites}</p>
            <p className='dress-code lora-font'>Dress code: {dressCode}</p>
            <Button buttonLink={locationLink} buttonText='Ir al Mapa' buttonClassName='dark-button'/>
        </div>
    </div>
  );
};

export default Ticket;
