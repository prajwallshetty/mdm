import React, { useEffect, useState } from 'react';

const FlipTimer = ({ targetDate, direction = 'down', callback }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isFinished, setIsFinished] = useState(false);

  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date(targetDate);
    const timeDifference = direction === 'down' ? target - now : now - target;

    if (timeDifference <= 0) {
      setIsFinished(true);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      if (callback) callback();
      return;
    }

    setTimeLeft({
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [targetDate, direction]);

  return (
    <div className="flipTimer">
      <div className="days-wrapper">
        <div className="days">
          <div className="digit">{String(timeLeft.days).padStart(2, '0')}</div>
        </div>
        <div className="seperator">:</div>
      </div>

      <div className="hours-wrapper">
        <div className="hours">
          <div className="digit">{String(timeLeft.hours).padStart(2, '0')}</div>
        </div>
        <div className="seperator">:</div>
      </div>

      <div className="minutes-wrapper">
        <div className="minutes">
          <div className="digit">{String(timeLeft.minutes).padStart(2, '0')}</div>
        </div>
        <div className="seperator">:</div>
      </div>

      <div className="seconds-wrapper">
        <div className="seconds">
          <div className="digit">{String(timeLeft.seconds).padStart(2, '0')}</div>
        </div>
      </div>
    </div>
  );
};

export default FlipTimer;
