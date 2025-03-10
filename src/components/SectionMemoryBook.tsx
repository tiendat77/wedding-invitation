import { FC } from 'react';
import Image from 'next/image';
import MemoryBookForm from './MemoryBookForm';
import { greatVibes } from '@/config/fonts';

const SectionMemoryBook: FC = () => {
  return (
    <section className="relative bg-[#f3f6fb] py-24 lg:py-28">
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2
            className={`${greatVibes.className} text-center text-4xl font-semibold lg:text-6xl`}
          >
            Sổ lưu bút
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng mình!
          </p>
        </div>
      </div>

      <div className="px-4 pt-14 lg:px-10">
        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-[-15%] left-0 z-0 h-full w-full">
              <Image
                src="/images/shape18.95678ca98d4b.svg"
                alt=""
                width="857"
                height="585"
                className="h-[120%] w-[120%]"
              />
            </div>
            <div className="bg-card z-1 min-w-full rounded-2xl lg:min-w-md">
              <MemoryBookForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMemoryBook;
