'use client';

import { motion } from 'motion/react';
import { FC } from 'react';

export interface HeartProps {
  xStart: number;
}

const Heart: FC<HeartProps> = ({ xStart }) => {
  const variants = {
    fall: {
      y: '100vh',
      x: xStart + (Math.random() - 0.5) * 200,
      opacity: [1, 1, 0],
      rotate: Math.random() * 360,
      transition: {
        duration: 5 + Math.random() * 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      initial={{ y: -50, x: xStart, opacity: 1 }}
      animate="fall"
      variants={variants}
      className="absolute text-3xl text-red-500"
    >
      ❤️
    </motion.div>
  );
};

export default Heart;
