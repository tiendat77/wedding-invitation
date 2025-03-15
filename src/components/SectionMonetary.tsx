import { FC } from 'react';
import Image from 'next/image';
import { greatVibes } from '@/config/fonts';

const SectionMonetary: FC = () => {
  return (
    <section className="relative bg-[#f3f6fb] py-24 lg:py-28">
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2
            className={`${greatVibes.className} text-center text-4xl font-semibold lg:text-6xl`}
          >
            Hộp mừng cưới
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Hạnh phúc không phải là điều chúng ta đạt được, mà là con đường
            chúng ta đi.
          </p>
        </div>
      </div>

      <div className="px-4 pt-14 lg:px-10">
        <div className="@container mx-auto flex items-center justify-center">
          <div className="bg-card relative rounded-2xl p-6 hover:shadow">
            <div className="border-primary-500 absolute top-6 right-4 bottom-6 left-4 rounded border-y"></div>
            <div className="border-primary-500 absolute top-4 right-6 bottom-4 left-6 rounded border-y"></div>
            <div className="border-primary-500 absolute top-6 right-4 bottom-6 left-4 rounded border-x"></div>
            <div className="border-primary-500 absolute top-4 right-6 bottom-4 left-6 rounded border-x"></div>

            <div className="relative z-[1] flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-50 w-50 overflow-hidden rounded">
                <Image
                  src="/mockup/qr-code.png"
                  alt=""
                  width="200"
                  height="200"
                  className="h-full w-full rounded object-cover"
                />
              </div>

              <ul className="text-center">
                <li className="px-2 py-1">Ngân hàng: BIDV - CN Sư Vạn Hạnh.</li>
                <li className="px-2 py-1">Tên tài khoản: Lý Thị Thu An</li>
                <li className="px-2 py-1">Số tài khoản: 3110801786</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMonetary;
