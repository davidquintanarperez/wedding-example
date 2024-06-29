import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import ParallaxImage from './components/ParallaxImage/ParallaxImage';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import HeaderContent from './components/HeaderContent/HeaderContent';
import Airbnb from './components/Airbnb/Airbnb';
import Button from './components/Button/Button';
import HeroImage from './components/HeroImage/HeroImage';
import Invitation from './components/Invitation/Invitation';
import Schedules from './components/Schedules/Schedules';
import GiftTable from './components/GiftTable/GiftTable';
import MakeUp from './components/MakeUp/MakeUp';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faMartiniGlassCitrus } from '@fortawesome/free-solid-svg-icons';

//Images
import img_1 from './components/Images/img_1.jpg'
import img_2 from './components/Images/img_2.jpg'
import img_3 from './components/Images/img_3.jpg'
import img_4 from './components/Images/img_4.jpg'
import img_5 from './components/Images/img_5.jpg'
import headerImage from './components/Images/img_7.jpg'
import parllaxImage from './components/Images/img_8.jpg'
import heroImage from './components/Images/img_9.jpg'
import imgOne from './components/Images/Liverpool_logo.svg.png'
import imgTwo from './components/Images/el-palacio-de-hierro.svg'
import imgThree from './components/Images/amazon.png'

import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  img_1,
  img_2,
  img_3,
  img_4,
  img_5
];

// Variables
const husbandsName = "Husband"
const wifeName = "Wife"
const weddingDate = "2024-12-13T11:30:00"
const airbnbLink = 'https://www.airbnb.mx/?from_belo_click'
const timeZone = "America/Mexico_City"
const location = "CDMX, Mexico"
const dressCode = "Formal"
const locationLink = "https://www.google.com.mx/maps/preview"
const husbandFatherName = "Husband Father Name"
const husbandMotherName = "Husband Mother Name"
const wifeFatherName = "Wife Father Name"
const wifeMotherName = "Wife Mother Name"
const ceremonyDate = "2024-12-13T11:30:00"
const ceremonyPlace = "Iglesia"
const ceremonyLocation = "CDMX, Mexico"
const ceremonyLocationLink = "https://www.google.com.mx/maps/preview"
const receptionDate = "2024-12-13T11:30:00"
const receptionPlace = "Salon"
const receptionLocation = "CDMX, Mexico"
const receptionLocationLink = "https://www.google.com.mx/maps/preview"
const invitationTitle = "Con la bendición de nuestros padres"
const invitationParagraph = "Te compartimos con mucha emoción la invitación de nuestra boda."
const giftTableTitle = 'Mesa de regalos'
const giftTableParagraph = 'El regalo es opcional, la actitud es obligatoria, pero si quieres tener un detalle con nosotros aquí están nuestras mesas de regalos.'
const giftTableLinkOne = 'https://www.liverpool.com.mx/tienda/home'
const giftTableLinkTwo = 'https://www.elpalaciodehierro.com/'
const giftTableLinkThree = 'https://www.amazon.com.mx/'
const giftButtonTextOne = 'Ir a la tienda'
const giftButtonTextTwo = 'Ir a la tienda'
const giftButtonTextThree = ''


const makeUpTitle = 'Maquillaje y Peinado'
const makeUpParagraph = 'Explora estas opciones para tu maquillaje y peinado.'
const companyOne = 'Nombre Estetica'
const descriptionOne = 'A 2 minutos del lugar de la boda.'
const makeUpLinkOne = "https://www.google.com.mx/maps/preview"
const makeUpButtonTextOne = 'Ir al mapa'
const companyTwo = 'Nombre Estetica'
const descriptionTwo = 'A 2 minutos del lugar de la boda.'
const makeUpLinkTwo = "https://www.google.com.mx/maps/preview"
const makeUpButtonTextTwo = 'Ir al mapa'
const companyThree = 'Nombre Estetica'
const descriptionThree = 'A 2 minutos del lugar de la boda.'
const makeUpLinkThree = "https://www.google.com.mx/maps/preview"
const makeUpButtonTextThree = 'Ir al mapa'

const ceremonyIcon = <FontAwesomeIcon icon={faHeart} />
const receptionIcon = <FontAwesomeIcon icon={faMartiniGlassCitrus} />

const countdownCeremony = <CountdownTimer targetDate={weddingDate} timeZone={timeZone} />
const headerContent = <HeaderContent husbandsName={husbandsName} wifeName={wifeName} weddingDate={weddingDate} countdownTimer={countdownCeremony} />
const airbnbButton = <Button buttonLink={airbnbLink} buttonText='Ir a Airbnb' buttonClassName='dark-button' />

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // duración de la animación en milisegundos
    });
  }, []);

  return (
    <div>
      <HeroImage content={headerContent} backgroundImage={headerImage} numberHero={1} overlayColor='rgba(55, 66, 89, 0.8)'/>

      <Invitation weddingDate={weddingDate} location={location} dressCode={dressCode} locationLink={locationLink} 
                  invitationTitle={invitationTitle} invitationParagraph={invitationParagraph}
                  husbandFatherName={husbandFatherName} husbandMotherName={husbandMotherName}
                  wifeFatherName={wifeFatherName} wifeMotherName={wifeMotherName}/>

      <Schedules ceremonyCompleteDate={ceremonyDate} ceremonyPlace={ceremonyPlace} ceremonyLocation={ceremonyLocation} 
                 ceremonyLocationLink={ceremonyLocationLink} ceremonyIcon={ceremonyIcon} receptionCompleteDate={receptionDate}
                 receptionPlace={receptionPlace} receptionLocation={receptionLocation} receptionLocationLink={receptionLocationLink}
                 receptionIcon={receptionIcon} image={images[currentIndex]}/>

      <ParallaxImage backgroundImage={parllaxImage}/>

      <GiftTable giftTableTitle={giftTableTitle} giftTableParagraph={giftTableParagraph}
                 imageOne={imgOne} giftTableLinkOne={giftTableLinkOne} giftButtonTextOne={giftButtonTextOne}
                 imageTwo={imgTwo} giftTableLinkTwo={giftTableLinkTwo} giftButtonTextTwo={giftButtonTextTwo} 
                 imageThree={imgThree} giftTableLinkThree={giftTableLinkThree} giftButtonTextThree={giftButtonTextThree}/>

      <Airbnb airbnbButton={airbnbButton}/>

      <MakeUp makeUpTitle={makeUpTitle} makeUpParagraph={makeUpParagraph}
              companyOne={companyOne} descriptionOne={descriptionOne} makeUpLinkOne={makeUpLinkOne} makeUpButtonTextOne={makeUpButtonTextOne}
              companyTwo={companyTwo} descriptionTwo={descriptionTwo} makeUpLinkTwo={makeUpLinkTwo} makeUpButtonTextTwo={makeUpButtonTextTwo}
              companyThree={companyThree} descriptionThree={descriptionThree} makeUpLinkThree={makeUpLinkThree} makeUpButtonTextThree={makeUpButtonTextThree}/>

      <HeroImage backgroundImage={heroImage}/>
    </div>
  );
}

export default App;
