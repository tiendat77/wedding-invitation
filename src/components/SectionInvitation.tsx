import { FC } from 'react';

import Image from 'next/image';
import { greatVibes } from '@/config/fonts';

const SectionInvitation: FC = () => {
  return (
    <section className="relative bg-[#0c284b] py-24 text-white lg:py-30">
      <div className="@container mx-auto grid gap-28 px-4 lg:gap-10 lg:px-10">
        <div className="absolute top-0 left-0 z-[-1] h-full w-full">
          <Image
            src="/images/shape9.dc6b6b56.svg"
            alt="Invitation Background"
            width="467"
            height="720"
            className="absolute bottom-0 left-0 h-2/3 w-auto"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 left-0 h-[calc(100%-0.5rem)] w-[calc(100%+0.5rem)] -translate-x-2 rounded border border-white"></div>
          <div className="absolute -top-1 left-1 h-full w-full -translate-x-2 rounded border border-white"></div>

          <div className="absolute -top-16 -right-24 z-0">
            <Image
              className="animated-floating-2 w-40"
              src="/images/shape12.78ac195.webp"
              alt="Invitation Shape"
              width="646"
              height="800"
            />
          </div>

          <div className="absolute -bottom-16 -left-16 z-0">
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

          <div className="z-1 flex flex-col gap-6 p-4 lg:gap-8 lg:p-6">
            <div className="flex gap-2 lg:gap-4">
              <div className="w-1/2 flex-auto text-center text-sm font-medium lg:text-lg">
                <div className="mb-3 text-sm">Nhà trai</div>
                <div className="mb-1">Huỳnh Văn Cẩm</div>
                <div className="mb-1">Lê Thị Phượng</div>
                <div className="text-sm italic">
                  Tân Lý Đông, Châu Thành, Tiền Giang
                </div>
              </div>
              <div className="w-1/2 flex-auto text-center text-sm font-medium lg:text-lg">
                <div className="mb-3 text-sm">Nhà gái</div>
                <div className="mb-1">Lý Văn Sơn</div>
                <div className="mb-1">Nguyễn Thị Nhiều</div>
                <div className="text-sm italic">
                  Thân Cửu Nghĩa, Châu Thành, Tiền Giang
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="mb-2 font-bold lg:text-xl">Trân trọng báo tin</h3>
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
              <div className="">Vào lúc 11 giờ</div>
              <div className="">Ngày 13 tháng 06 năm 2025</div>
              <div className="text-sm italic">
                (Nhằm ngày 18 tháng 05 năm Ất Tỵ)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInvitation;
