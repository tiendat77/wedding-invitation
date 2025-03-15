'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import { greatVibes } from '@/config/fonts';

const SectionThankYou: FC = () => {
  return (
    <section className="bg-primary-100 relative overflow-hidden py-24 lg:h-screen lg:py-28">
      <div className="absolute bottom-0 left-0 hidden h-1/3 w-auto lg:block">
        <Image
          src="/images/shape24.68978b87f8a.png"
          alt=""
          width="420"
          height="800"
          className="h-full w-auto"
        />
      </div>

      <div className="absolute right-0 bottom-0 h-1/3 w-auto">
        <Image
          src="/images/shape25.68978b87f8b.png"
          alt=""
          width="420"
          height="800"
          className="h-full w-auto"
        />
      </div>

      <div className="@container mx-auto flex h-full flex-col items-center justify-center px-4 lg:px-10">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            <div className="absolute top-0 -left-1/2 z-0 h-auto w-[200%]">
              <Image
                src="/images/shape23.78b897d0a.png"
                alt=""
                width="800"
                height="531"
                className="h-full w-auto"
              />
            </div>

            <div className="mask mask-circle relative z-[1] h-60 w-60 overflow-hidden rounded-full border-8 border-white">
              <Image
                src="/mockup/pexels-toan-van-13706261.jpg"
                alt=""
                width="400"
                height="400"
                className="mask mask-circle h-full w-full rounded-full object-cover"
              />
            </div>
          </div>

          <h2
            className={`${greatVibes.className} relative z-[1] mt-10 text-center text-5xl font-semibold lg:text-6xl`}
          >
            Thank you!
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionThankYou;
