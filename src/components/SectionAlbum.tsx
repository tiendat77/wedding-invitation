'use client';

import { FC } from 'react';
import { motion } from 'motion/react';

import Slides from './Slides';
import { piklabAndrade } from '@/config/fonts';

const SectionAlbum: FC = () => {
  const images = [
    '/album/00f0fbc9977aa422f5602e6fae1ea3b21300ed4fdedfbfe5695a5036b0fae91c.jpg',
    '/album/acb90f8da29fa872c1656783be884bbcfdc9f13651faee6a2d075628ac6e01c4.jpg',
    '/album/02d475ce9c7d4f3140d250341825f4b345daf9da26372f92448ec57c76710437.jpg',
    '/album/d42e2ed18675f9f6d224d4f7ffa7e3dac6b3d6ce1fa17fe0ab538eda3e992906.jpg',
    '/album/071233007a663f4c0207168ce9976b2d8bf3e0fb9974d751823fc2eefb590495.jpg',
    '/album/e79e2cf86619c42f44447e23fb2ba87e57847fd020a978ab58e0118088c8e9b3.jpg',
    '/album/20995bc3173ea8c796715b19b7eee52e1a7ea5aa8c16e76edd4ed9b0754647b0.jpg',
    '/album/ef1ac3d41c3480050d9358d2069586a5909afd1deabbcbfd1211a1ae4757fd0f.jpg',
    '/album/35a372d4f51ec28e670fdc884751df44d31816d6869c0f131847bf784e4decf9.jpg',
  ];

  return (
    <section
      className="relative bg-cover py-24 lg:py-20"
      style={{ backgroundImage: "url('/images/background1.90b8d0ca0.webp')" }}
    >
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2
            className={`${piklabAndrade.className} text-center text-5xl leading-normal font-semibold lg:text-6xl`}
          >
            Album hình cưới
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu
            ai đó sâu sắc sẽ cho bạn dũng khí
          </p>

          <a
            className="text-primary-500 mt-6 text-center"
            href="https://thuantiendatweddingalbum.vercel.app/"
            target="_blank"
          >
            Xem tất cả ở đây
          </a>
        </div>
      </div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: 'spring',
          stiffness: 200,
          damping: 10,
        }}
        className="relative overflow-x-hidden pt-14"
      >
        <Slides images={images} />
      </motion.div>
    </section>
  );
};

export default SectionAlbum;
