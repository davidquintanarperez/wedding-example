import React from 'react';
import './Invitation.css';
import SectionTransparent from '../SectionTransparent/SectionTransparent';
import Ticket from '../Ticket/Ticket';

const Invitation = ({weddingDate, location, dressCode, locationLink, invitationTitle, invitationParagraph, husbandFatherName, husbandMotherName,
    wifeFatherName, wifeMotherName
 }) => {
  const ticket = <Ticket weddingDate={weddingDate} location={location} dressCode={dressCode} locationLink={locationLink}/>
  const content = (
    <div>
        <div className='container'>
            <div className='perents lora-font row justify-content-center text-center'>
                <div className='col-12 col-md-3' data-aos="fade-up">
                    <p>{husbandFatherName}</p>
                    <p>{husbandMotherName}</p>
                </div>
                <div className='col-12 col-md-3' data-aos="fade-up">
                    <p>{wifeFatherName}</p>
                    <p>{wifeMotherName}</p>
                </div>
            </div>
        </div>
        {ticket}
    </div>
  );
  
  return (
    <SectionTransparent title={invitationTitle} sectionParagraph={invitationParagraph} content={content}/>
  );
};

export default Invitation;
