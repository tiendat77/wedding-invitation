'use client';

import { FC, useEffect, useState } from 'react';
import Heart from './Heart';

export interface FallingHeartsProps {
  className?: string;
}

const FallingHearts: FC<FallingHeartsProps> = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const xStart = Math.random() * window.innerWidth;
      setHearts((prev) => [...prev.slice(-20), { id: Date.now(), xStart }]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pointer-events-none fixed top-0 right-0 bottom-0 left-0 z-10 overflow-hidden">
      <div className="@container mx-auto">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            xStart={heart.xStart}
          />
        ))}
      </div>
    </section>
  );
};

export default FallingHearts;
