import { FC } from 'react';
import Image from 'next/image';
import { loveLight } from '@/config/fonts';

import Countdown from './Countdown';

const CountDown: FC = () => {
  return (
    <section className="container mx-auto grid min-h-screen gap-4 px-4 lg:grid-cols-2 lg:gap-10 lg:px-10">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-8 flex items-center justify-center">
          <Image
            className=""
            width="200"
            height="200"
            src="images/shape1.9b6bc32e.svg"
            alt=""
          />
        </div>

        <div className="mb-8 text-center text-5xl sm:text-6xl xl:text-7xl 2xl:text-7xl">
          <h2 className={loveLight.className}>Tiến Đạt &amp; Thu An</h2>
        </div>

        <div className="mb-8 space-y-2 text-center">
          <p>Chúng mình sẽ kết hôn vào ngày 13 tháng 06, 2025!</p>
          <p>(Nhằm ngày 18 tháng 05 năm Ất Tỵ)</p>
        </div>

        <div className="mb-8 text-center font-semibold">
          <Countdown target="2025-06-13T02:00:00.000Z" />
        </div>

        <div className="flex items-center justify-center">
          <Image
            width="200"
            height="200"
            src="images/shape2.267c9137.svg"
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative flex flex-col items-center overflow-visible">
          <div className="absolute top-[-20%] left-[-10%] z-[-1] h-[120%] w-[150%]">
            <Image
              className="h-auto w-full"
              width="420"
              height="660"
              src="/images/shape.c05444ec.png"
              alt=""
            />
          </div>

          <div className="absolute top-[-4rem] left-[-4rem] z-1 h-36 w-36">
            <Image
              width="150"
              height="150"
              src="/images/shape3.e04645fc.svg"
              alt=""
            />
          </div>

          <div className="absolute right-[-8rem] bottom-[-1rem] z-1 w-80">
            <Image
              width="375"
              height="289"
              src="/images/shape6.5390e515.svg"
              alt=""
            />
          </div>

          <div className="absolute bottom-[-6rem] left-4 z-1 w-40">
            <Image
              width="162"
              height="154"
              src="/images/shape5.08f80a68.svg"
              alt=""
            />
          </div>

          <div className="z-0 rounded bg-white p-3">
            <Image
              className="h-auto w-full md:min-w-96"
              width="420"
              height="660"
              src="/images/hero-1ad4a1844.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
