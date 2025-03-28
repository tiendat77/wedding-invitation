'use client';

import { FC } from 'react';
import { motion } from 'motion/react';

import Image from 'next/image';
import { greatVibes } from '@/config/fonts';

const SectionInvitation: FC = () => {
  return (
    <section
      className="relative overflow-x-hidden bg-repeat py-24 lg:py-30"
      style={{ backgroundImage: "url('/images/background2.7ba9d69f6a.png')" }}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="@container mx-auto grid gap-28 px-4 lg:gap-10 lg:px-10"
      >
        <div className="rounded-2xl bg-white p-4 lg:p-6">
          <div className="relative flex flex-col items-center">
            <div className="border-primary-200 absolute top-0 left-0 h-[calc(100%-0.5rem)] w-[calc(100%+0.5rem)] -translate-x-2 rounded border"></div>
            <div className="border-primary-200 absolute -top-1 left-1 h-full w-full -translate-x-2 rounded border"></div>

            <div className="absolute -top-16 -right-24 z-0">
              <Image
                className="animated-floating-2 w-40"
                src="/images/shape12.78ac195.webp"
                alt="Invitation Shape"
                width="646"
                height="800"
              />
            </div>

            <div className="absolute -bottom-16 -left-24 z-0 lg:-left-16">
              <Image
                className="animated-floating-2 w-40"
                src="/images/shape13.098bd90.webp"
                alt="Invitation Shape"
                width="646"
                height="800"
              />
            </div>

            <div className="absolute top-0 left-0 z-0 h-full w-[200%] overflow-hidden lg:w-full">
              <Image
                className="w-full rotate-90 opacity-10 lg:-translate-y-40"
                src="/images/shape14.f789d78.png"
                alt="Invitation Shape"
                width="646"
                height="800"
              />
            </div>

            <div className="z-1 flex flex-col gap-6 p-4 lg:gap-8 lg:px-6 lg:py-20">
              <div className="flex gap-2 lg:gap-4">
                <div className="w-1/2 flex-auto text-center text-sm font-medium lg:text-lg">
                  <div className="mb-3 text-sm">Nhà trai</div>
                  <div className="mb-1 uppercase">Huỳnh Văn Cẩm</div>
                  <div className="mb-1 uppercase">Lê Thị Phượng</div>
                  <div className="text-sm italic">
                    Tân Lý Đông, Châu Thành, Tiền Giang
                  </div>
                </div>
                <div className="w-1/2 flex-auto text-center text-sm font-medium lg:text-lg">
                  <div className="mb-3 text-sm">Nhà gái</div>
                  <div className="mb-1 uppercase">Lý Văn Sơn</div>
                  <div className="mb-1 uppercase">Nguyễn Thị Nhiều</div>
                  <div className="text-sm italic">
                    Thân Cửu Nghĩa, Châu Thành, Tiền Giang
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="mb-2 font-bold lg:text-xl">
                  Trân trọng báo tin
                </h3>
                <div className="lg:text-xl">Lễ Thành Hôn của con chúng tôi</div>
              </div>

              <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
                <div className="flex-auto text-center">
                  <h2
                    className={`${greatVibes.className} text-4xl tracking-wider xl:text-5xl`}
                  >
                    Huỳnh Tiến Đạt
                  </h2>
                </div>
                <div className="text-center">
                  <Image
                    className="h-14 w-auto lg:h-20"
                    src="/images/shape.9891271290213.webp"
                    width="1600"
                    height="613"
                    alt=""
                  />
                </div>
                <div className="flex-auto text-center">
                  <h2
                    className={`${greatVibes.className} text-4xl tracking-wider xl:text-5xl`}
                  >
                    Lý Thị Thu An
                  </h2>
                </div>
              </div>

              <div className="space-y-1 text-center">
                <div className="">Hôn lễ được cử hành tại tư gia</div>
                <div className="">Vào lúc 09 giờ</div>
                <div className="">Ngày 14 tháng 06 năm 2025</div>
                <div className="text-sm italic">
                  (Nhằm ngày 19 tháng 05 năm Ất Tỵ)
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionInvitation;
