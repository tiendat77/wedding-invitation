'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import { greatVibes } from '@/config/fonts';

const WhoWeAre: FC = () => {
  return (
    <section className="relative px-4 py-24 lg:px-10 lg:py-20">
      <div className="absolute top-0 left-0 z-[-1] flex h-full w-full flex-col items-center justify-center">
        <svg
          viewBox="0 0 1920 692"
          fill="none"
          className="h-auto w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="#e3ecf6"
              strokeWidth="2"
            />
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <g opacity="0.1">
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="#e3ecf6"
              strokeWidth="2"
            />
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <path
            d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
            fill="#f3f6fb"
          />
          <path
            d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
            fill="#f3f6fb"
          />
        </svg>
      </div>

      <div className="@container mx-auto grid gap-18 lg:gap-10">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-10">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col items-center justify-center"
          >
            <div className="absolute top-[-5%] left-0 z-[-1] h-auto w-1/3 lg:left-[-5%] lg:w-1/2">
              <Image
                className="animated-floating-2 h-auto w-full"
                src="/images/shape31.867a6d987b9c.webp"
                width="602"
                height="532"
                alt=""
              />
            </div>

            <div
              className="mask aspect-square h-auto w-[80%] overflow-hidden lg:w-[25rem]"
              style={{ maskImage: 'url(/images/mask1.789ba569.svg)' }}
            >
              <Image
                className="h-auto w-lg max-w-full"
                src="/album/dc072a972a76d4185e784d17206f42ca4f503a5f82bdb2ba6e21b487fbf84752.jpg"
                width="500"
                height="500"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, x: 150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col justify-center lg:col-span-2 lg:max-w-lg"
          >
            <div className="mb-8 text-center text-5xl font-semibold lg:text-6xl">
              <h2 className={greatVibes.className}>Thu An</h2>
            </div>

            <div className="mb-8 space-y-2 text-center lg:text-left">
              <p>
                Cô gái cung Thiên Bình, tỉ mỉ từng chút một, chăm chỉ như chú
                ong nhỏ, lúc nào cũng rạng rỡ nụ cười và tràn đầy nhiệt huyết.
                Nhưng mà, đôi khi, cô cũng hơi đãng trí một chút, kiểu như đang
                cầm cây bút mà lại đi tìm khắp nhà ấy. Cô thích màu hồng, cái
                màu của những giấc mơ ngọt ngào, và trong lòng lúc nào cũng ấp ủ
                hình ảnh một ngôi nhà nhỏ xinh, chẳng cần to đâu, chỉ cần đầy ắp
                hạnh phúc, bên cạnh người chồng thương cô hết mực.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid place-items-end gap-4 lg:grid-cols-3 lg:gap-10">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, x: -150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-2 lg:max-w-lg"
          >
            <div className="mb-8 text-center text-5xl font-semibold lg:text-6xl">
              <h2 className={greatVibes.className}>Tiến Đạt</h2>
            </div>

            <div className="mb-8 space-y-2 text-center lg:text-right">
              <p>
                Một gã lập trình viên quái đản, suốt ngày lẩm nhẩm với máy tính,
                tay gõ phím còn nhanh hơn cả tim đập khi hồi hộp. Lúc mới gặp ai
                cũng bảo gã hiền, mặt lúc nào cũng toe toét như nắng giữa trưa,
                nhưng sâu thẳm trong lòng, hắn lại hay cáu kỉnh, kiểu như mèo
                con bị ai giẫm đuôi. Gã thích ngồi một góc đọc sách, xem phim,
                hay cày game đến quên giờ. Gã muốn một căn nhà nhỏ, tường trắng
                tinh, nắng tràn qua cửa, có vườn hoa nở rộ quanh năm, để cùng cô
                ấy ngồi đó, chẳng cần gì hơn ngoài tiếng cười.
              </p>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, scale: 0.5, x: 150 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative order-1 flex flex-col items-center justify-center lg:order-2"
          >
            <div className="absolute top-[-10%] right-0 z-[-1] h-auto w-1/2 lg:right-[-15%] lg:w-2/3">
              <Image
                className="animated-floating-2 h-full w-auto"
                src="/images/shape32.8954a9b6d87f.webp"
                width="602"
                height="532"
                alt=""
              />
            </div>

            <div
              className="mask aspect-square h-auto w-[80%] overflow-hidden lg:w-[25rem]"
              style={{ maskImage: 'url(/images/mask2.3956cd0a.svg)' }}
            >
              <Image
                className="h-auto w-lg max-w-full"
                src="/album/1f9633236ff42cbe463260ae347c35e99d7a7e92780686d2dbd941675561a502.jpg"
                width="500"
                height="500"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
