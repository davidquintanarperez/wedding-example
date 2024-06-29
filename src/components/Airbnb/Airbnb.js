import React from 'react';
import './Airbnb.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';

const Airbnb = ({airbnbButton}) => {
  return (
    <div className='airbnb d-flex align-items-center'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-12 col-md-6 text-center' data-aos="fade-up">
                    <FontAwesomeIcon className='airbnb-icon col' icon={faAirbnb}/>
                </div>
                <div className='airbnb-info lora-font col-12 col-md-6' data-aos="fade-up">
                    <div>
                        <p>Busca y reserva un alojamiento único en Airbnb</p>
                        <div>
                            <div className='separator'></div>
                        </div>
                        {airbnbButton}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Airbnb;
