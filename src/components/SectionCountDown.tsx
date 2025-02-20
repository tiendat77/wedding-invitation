import { FC } from 'react';
import Image from 'next/image';
import { dancingScript } from '@/config/fonts';

import Countdown from './Countdown';

const CountDown: FC = () => {
  return (
    <section className="bg-primary-50 relative py-24 lg:py-20">
      <div className="absolute top-0 left-0 h-full w-full">
        <svg
          className="absolute top-0 right-0 h-1/3 w-auto"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-primary"
            fill="currentColor"
            stroke-width="1.2102"
            opacity="0.5"
            d="m2.9414 0c8.9929 39.394 38.165 74.79 77.215 86.535 17.238 5.1821 35.272 6.17 53.332 7.1602 15.358 0.8419 30.735 1.6862 45.66 5.1094 52.922 12.154 95.828 59.515 102.63 113.31 2.739 21.627 0.13811 43.369-2.4629 65.113-1.002 8.382-2.0052 16.764-2.7012 25.141-2.504 30.105-0.30886 62.659 17.994 86.707 16.862 32.755 56.755 79.054 90.166 91.133 36.8 8.0648 55.124-13.439 69.811-25.787 22.987-19.327 39.926-51.252 57.414-64.152v-390.27h-509.06zm166.9 189.35c-10.828 0.30246-21.482 4.2899-29.025 11.998-10.687 10.903-13.979 27.968-9.5644 42.57 4.401 14.614 15.838 26.599 29.598 33.236 65.081 31.356 85.836-60.584 28.035-84.375-5.988-2.4649-12.546-3.6112-19.043-3.4297z"
          />
          <path
            className="text-primary"
            fill="currentColor"
            d="m328.17 38.89c-9.322 15.636-11.056 33.147 0.5125 45.887 16.245 17.877 59.454 25.179 69.55 44.481 6.182 11.821-2.3441 24.298-9.1367 36.016-8.2536 14.23-14.108 29.219-11.699 44.143 2.4095 14.924 21.803 34.564 42.955 43.442 13.083 5.4931 30.626 9.4493 35.151 18.355 2.442 4.7999 0.29395 9.9185-1.1336 14.849-3.5544 12.252-2.5847 24.926 2.8347 36.953 1.8532 4.1155 4.394 8.3153 9.7256 11.277 5.3307 2.9531 28.228-0.45159 34.41-2.8134 6.803-2.5967 11.452-6.4804 11.518-11.149 0.33787-24.223-0.8871-48.437-0.54923-72.66 1.0905-78.003-0.17431-157.56-0.32719-235.56-0.011-2.9154 3.0338-10.183-0.62956-12.208-3.1836-1.7717-11.298 0.30993-15.736 0.15995-27.606-0.98428-94.919-2.6135-120.87 3.8546-19.386 4.8183-36.994 18.898-46.578 34.975z"
            opacity=".3"
            stroke-width=".78383"
          />
        </svg>
      </div>

      <div className="@container mx-auto grid min-h-screen gap-28 px-4 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 flex items-center justify-center">
            <Image
              className=""
              width="200"
              height="200"
              src="/images/shape1.9b6bc32e.svg"
              alt=""
            />
          </div>

          <div className="mb-8 text-center text-5xl sm:text-6xl xl:text-7xl 2xl:text-7xl">
            <h2 className={dancingScript.className}>Tiến Đạt &amp; Thu An</h2>
          </div>

          <div className="mb-10 space-y-2 text-center">
            <p>Chúng mình cưới, 13 tháng 06, 2025!</p>
            {/* <p>(Nhằm ngày 18 tháng 05 năm Ất Tỵ)</p> */}
          </div>

          <div
            className={`${dancingScript.className} mb-8 text-center font-semibold`}
          >
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
            <div className="absolute bottom-[-6rem] left-1/2 z-1 w-40 -translate-x-1/2 lg:bottom-[-4rem]">
              <Image
                width="162"
                height="154"
                src="/images/shape5.08f80a68.svg"
                alt=""
              />
            </div>

            <div className="z-0 rounded-full bg-white p-3">
              <Image
                className="h-auto w-full max-w-[70vw] rounded-full md:max-w-96"
                width="420"
                height="660"
                src="/mockup/pexels-toan-van-13706261.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
