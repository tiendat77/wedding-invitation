'use client';

import React, { useState, useEffect, FC } from 'react';

export interface CountdownProps {
  target: Date | string;
}

const Countdown: FC<CountdownProps> = ({ target }) => {
  const targetDate = new Date(target).getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    if (targetDate <= new Date().getTime()) {
      return;
    }

    const updateCountdown = () => {
      const timeLeft = calculateTimeLeft(targetDate);

      if (timeLeft) {
        setDays(timeLeft.days);
        setHours(timeLeft.hours);
        setMinutes(timeLeft.minutes);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-5xl font-bold">{days}</p>
        <p className="text-xl">Ngày</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-5xl font-bold">{hours}</p>
        <p className="text-xl">Giờ</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3">
        <p className="text-5xl font-bold">{minutes}</p>
        <p className="text-xl">Phút</p>
      </div>
    </div>
  );
};

// Utility function to calculate time left
const calculateTimeLeft = (targetDate: number) => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    return null;
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  };
};

export default Countdown;
