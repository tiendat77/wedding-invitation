import { greatVibes } from '@/config/fonts';
import { FC } from 'react';

const SectionWeddingMonetaryGift: FC = () => {
  return (
    <section className="relative py-24 lg:py-20">
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="flex flex-col items-center">
          <h2
            className={`${greatVibes.className} text-center text-4xl font-semibold lg:text-6xl`}
          >
            Sự kiện cưới
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Hạnh phúc không có tiêu chuẩn. Chỉ cần mình cười nhiều hơn khóc, vậy
            chắc chắn là gặp đúng người
          </p>
        </div>
      </div>

      <div className="px-4 pt-14 lg:px-10">
        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="relative flex flex-col items-center justify-center"></div>
        </div>
      </div>
    </section>
  );
};

export default SectionWeddingMonetaryGift;
