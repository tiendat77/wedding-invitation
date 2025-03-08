import { FC } from 'react';
import Image from 'next/image';

const SectionOurStory: FC = () => {
  return (
    <section className="relative py-24 lg:py-20">
      <div className="@container mx-auto px-4 lg:px-10">
        <div className="mb-20 flex flex-col items-center">
          <h2 className="text-center text-4xl font-semibold lg:text-6xl">
            Câu chuyện của chúng mình
          </h2>

          <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
            Tình yêu không chỉ là một danh từ - nó là một động từ, nó còn hơn cả
            một cảm giác - đó là sự quan tâm, chia sẻ, giúp đỡ, hy sinh
          </p>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
            <div className="flex flex-col items-center overflow-visible">
              <div className="group relative">
                <div className="absolute top-[-35%] z-[-1] h-auto w-[80%] lg:left-[-20%] lg:w-[80%]">
                  <Image
                    className="animated-floating-2 h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape15.890d8a90.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-hexagon z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-hexagon h-auto w-full min-w-[20rem] transition duration-300 group-hover:scale-105 lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/glenlo-abbey_hotel-gway-wedding-venue-beenchanted-wedding-package_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 9, 2012
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Lần đầu gặp mặt</h2>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  dolorum deserunt veritatis provident nobis nihil iste,
                  excepturi maiores laboriosam asperiores perspiciatis labore
                  iure dignissimos dolores soluta. Est eaque illum dolores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="absolute top-0 left-[-4rem] -z-0 hidden h-full lg:block">
          <Image
            className="h-full w-auto"
            width="467"
            height="720"
            src="/images/shape9.dc6b6b56.svg"
            alt=""
          />
        </div>

        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-right">
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 10, 2013
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Bắt đầu hẹn hò</h2>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  dolorum deserunt veritatis provident nobis nihil iste,
                  excepturi maiores laboriosam asperiores perspiciatis labore
                  iure dignissimos dolores soluta. Est eaque illum dolores!
                </p>
              </div>
            </div>

            <div className="order-1 flex flex-col items-center overflow-visible lg:order-2">
              <div className="group relative">
                <div className="absolute top-[-35%] left-[10%] z-[-1] h-auto w-[50%] lg:left-0 lg:w-[80%]">
                  <Image
                    className="animated-floating-2 h-auto w-full"
                    width="588"
                    height="800"
                    src="/images/shape16.a7s8f85d.webp"
                    alt=""
                  />
                </div>

                <div className="mask mask-heart z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-heart h-auto w-full min-w-[20rem] transition duration-300 group-hover:scale-105 lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/481697740_1062720689232591_7398307524139173159_n.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="absolute top-0 right-0 -z-0 hidden h-full lg:block">
          <Image
            className="h-full w-auto"
            width="467"
            height="720"
            src="/images/shape11.a7471ccc.svg"
            alt=""
          />
        </div>

        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
            <div className="group flex flex-col items-center overflow-visible">
              <div className="relative">
                <div className="absolute top-[-45%] left-[10%] z-[-1] h-auto w-[50%] lg:left-0 lg:w-[80%]">
                  <Image
                    className="animated-floating-2 h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape17.98f786b4c.webp"
                    alt=""
                  />
                </div>

                <div className="mask mask-squircle z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-squircle h-auto w-full transition duration-300 group-hover:scale-105 lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/482079616_1064957082342285_3316035399216326322_n.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center text-center lg:text-left">
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 1, 2025
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Giây phút cầu hôn</h2>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                  dolorum deserunt veritatis provident nobis nihil iste,
                  excepturi maiores laboriosam asperiores perspiciatis labore
                  iure dignissimos dolores soluta. Est eaque illum dolores!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOurStory;
