'use client';

import { FC } from 'react';
import Image from 'next/image';
import { dancingScript } from '@/config/fonts';
import { motion } from 'motion/react';

import Countdown from './Countdown';

const CountDown: FC = () => {
  return (
    <section className="bg-primary-50 relative py-24 lg:py-20">
      <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
        <svg
          className="absolute top-0 right-0 z-0 h-1/2 w-auto"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-primary"
            fill="currentColor"
            opacity="0.5"
            d="m2.9414 0c8.9929 39.394 38.165 74.79 77.215 86.535 17.238 5.1821 35.272 6.17 53.332 7.1602 15.358 0.8419 30.735 1.6862 45.66 5.1094 52.922 12.154 95.828 59.515 102.63 113.31 2.739 21.627 0.13811 43.369-2.4629 65.113-1.002 8.382-2.0052 16.764-2.7012 25.141-2.504 30.105-0.30886 62.659 17.994 86.707 16.862 32.755 56.755 79.054 90.166 91.133 36.8 8.0648 55.124-13.439 69.811-25.787 22.987-19.327 39.926-51.252 57.414-64.152v-390.27h-509.06zm166.9 189.35c-10.828 0.30246-21.482 4.2899-29.025 11.998-10.687 10.903-13.979 27.968-9.5644 42.57 4.401 14.614 15.838 26.599 29.598 33.236 65.081 31.356 85.836-60.584 28.035-84.375-5.988-2.4649-12.546-3.6112-19.043-3.4297z"
          />
          <path
            className="text-primary"
            fill="currentColor"
            opacity=".3"
            d="m328.17 38.89c-9.322 15.636-11.056 33.147 0.5125 45.887 16.245 17.877 59.454 25.179 69.55 44.481 6.182 11.821-2.3441 24.298-9.1367 36.016-8.2536 14.23-14.108 29.219-11.699 44.143 2.4095 14.924 21.803 34.564 42.955 43.442 13.083 5.4931 30.626 9.4493 35.151 18.355 2.442 4.7999 0.29395 9.9185-1.1336 14.849-3.5544 12.252-2.5847 24.926 2.8347 36.953 1.8532 4.1155 4.394 8.3153 9.7256 11.277 5.3307 2.9531 28.228-0.45159 34.41-2.8134 6.803-2.5967 11.452-6.4804 11.518-11.149 0.33787-24.223-0.8871-48.437-0.54923-72.66 1.0905-78.003-0.17431-157.56-0.32719-235.56-0.011-2.9154 3.0338-10.183-0.62956-12.208-3.1836-1.7717-11.298 0.30993-15.736 0.15995-27.606-0.98428-94.919-2.6135-120.87 3.8546-19.386 4.8183-36.994 18.898-46.578 34.975z"
          />
        </svg>

        <svg
          className="absolute bottom-0 left-0 z-0 h-1/2 w-auto"
          version="1.1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-primary"
            fill="currentColor"
            opacity="0.5"
            d="m27.383 0.0625c-4.749-0.11972-9.4809-0.05356-14.15 0.18164-4.2607 0.21418-8.738 0.62336-13.232 1.0625v510.69h164.94c71.835 0.69023 171.15-0.17303 205.09-0.03125 5.512-0.542 16.296-5.7664 25.916-15.623 3.7-6.1025 6.8292-8.9053 8.5332-14.279 18.046-57.054-18.11-125.35-75.486-142.6-17.237-5.182-35.272-6.1721-53.332-7.1621-15.358-0.842-30.735-1.6844-45.66-5.1074-52.922-12.154-95.828-59.517-102.63-113.31-2.739-21.627-0.13811-43.367 2.4629-65.111 1.002-8.382 2.0052-16.764 2.7012-25.141 2.504-30.105 0.30886-62.66-17.994-86.709-19.799-26.004-53.907-36.023-87.15-36.861zm200.71 158.75c-1.0219-0.0238-2.0255-0.00978-3.0098 0.03906-42.52 2.1096-49.676 70.7-0.90625 90.773 15.968 6.573 35.999 3.7627 48.068-8.5703 10.687-10.903 13.98-27.966 9.5664-42.568-4.402-14.614-15.839-26.601-29.598-33.238-8.8979-4.287-16.968-6.269-24.121-6.4355z"
          />
          <path
            className="text-primary"
            fill="currentColor"
            opacity=".3"
            d="m191.73 474.51c11.036-16.041 13.089-34.006-0.607-47.076-19.232-18.339-70.387-25.831-82.339-45.633-7.3188-12.127 2.7752-24.927 10.817-36.949 9.7715-14.598 16.702-29.976 13.85-45.286-2.853-15.31-16.561-30.649-41.603-39.757-15.49-5.6354-36.258-9.6941-41.615-18.83-2.8914-4.9239-0.3485-10.175 1.3424-15.233 4.208-12.57 3.0592-25.572-3.356-37.91-2.1944-4.222-5.2019-8.5304-11.514-11.569-6.312-3.0294-16.767-4.3469-24.086-1.9234-8.0545 2.6639-12.923 11.229-13 16.018-0.4002 24.851 0.39685 46.416 0.79475 71.266-1.2908 80.024-0.57345 160.34-0.39265 240.36 0.0129 2.9908-0.10808 7.2256-0.118 10.411 5.4655-0.23927 14.133-0.36377 19.387-0.21004 32.895-0.098 86.963 1.9577 117.3-1.7953 22.951-4.943 43.797-19.387 55.143-35.881z"
          />
        </svg>
      </div>

      <div className="@container relative z-[1] mx-auto grid min-h-screen gap-28 px-4 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-8 flex items-center justify-center">
            <Image
              className="animated-floating-2"
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
            <p>Chúng mình cưới, 14 tháng 06, 2025!</p>
          </div>

          <div
            className={`${dancingScript.className} mb-8 text-center font-semibold`}
          >
            <Countdown target="2025-06-14T02:00:00.000Z" />
          </div>

          <div className="flex items-center justify-center">
            <Image
              className="animated-floating"
              width="200"
              height="200"
              src="images/shape2.267c9137.svg"
              alt=""
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-center"
        >
          <div className="relative flex flex-col items-center overflow-visible">
            <div className="absolute bottom-[-6rem] left-1/2 z-1 w-40 -translate-x-1/2 lg:bottom-[-4rem]">
              <Image
                width="162"
                height="154"
                src="/images/shape5.08f80a68.svg"
                alt=""
              />
            </div>

            <div className="z-0 max-w-[70vw] overflow-hidden rounded-full border-8 border-white bg-white md:max-w-96">
              <Image
                className="animated-kenburn h-auto w-full rounded-full"
                width="420"
                height="660"
                src="/album/f785019977dc8118b3f0a932215baa84c1fa5e95369989ba49324ad8cf4231f1.jpg"
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountDown;
