import { FC } from 'react';
import Slides from './Slides';
import { greatVibes } from '@/config/fonts';

const SectionAlbum: FC = () => {
  const images = [
    '/mockup/475951887_1047898597381467_3735963912519266097_n.jpg',
    '/mockup/476121996_1047898757381451_424632599530424998_n.jpg',
    '/mockup/pexels-san-wedding-5544650.jpg',
    '/mockup/pexels-toan-van-13706261.jpg',
    '/mockup/pexels-tran-long-13114541.jpg',
  ];

  return (
    <section
      className="relative bg-cover py-24 lg:py-20"
      style={{ backgroundImage: "url('/images/background1.90b8d0ca0.webp')" }}
    >
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2
            className={`${greatVibes.className} text-center text-4xl font-semibold lg:text-6xl`}
          >
            Album hình cưới
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Được ai đó yêu sâu sắc sẽ mang lại cho bạn sức mạnh, trong khi yêu
            ai đó sâu sắc sẽ cho bạn dũng khí
          </p>
        </div>
      </div>

      <div className="relative overflow-x-hidden pt-14">
        <Slides images={images} />
      </div>
    </section>
  );
};

export default SectionAlbum;
