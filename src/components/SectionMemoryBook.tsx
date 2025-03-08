import { FC } from 'react';

const SectionMemoryBook: FC = () => {
  return (
    <section className="bg-primary-50 relative py-24 lg:py-20">
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-center text-4xl font-semibold lg:text-6xl">
            Sổ lưu bút
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp nhất đến
            đám cưới của chúng tôi!
          </p>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <form></form>
        </div>
      </div>
    </section>
  );
};

export default SectionMemoryBook;
