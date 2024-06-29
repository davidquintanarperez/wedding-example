import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import moment from 'moment-timezone';
import './CountdownTimer.css'

const CountdownTimer = ({ targetDate, timeZone }) => {
  const calculateTimeLeft = () => {
    const now = moment().tz(timeZone);
    const target = moment.tz(targetDate, timeZone);
    const difference = target.diff(now);

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="lora-font countdown-container" data-aos="fade-up">
      <div className="countdown-time">
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.days}</p>
          <p className="countdown-label">Days</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.hours}</p>
          <p className="countdown-label">Hours</p>
        </div>
        <div className="countdown-item">
          <p className="countdown-number">{timeLeft.minutes}</p>
          <p className="countdown-label">Minutes</p>
        </div>
        <div className="countdown-item">
          <p id="seconds" className="countdown-number">{timeLeft.seconds}</p>
          <p className="countdown-label">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;