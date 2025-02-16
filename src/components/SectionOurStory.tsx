import { FC } from 'react';
import Image from 'next/image';

const SectionOurStory: FC = () => {
  return (
    <section className="relative px-4 py-24 lg:px-10 lg:py-20">
      <div className="@container mx-auto">
        <div className="mb-20 flex flex-col items-center">
          <div className="mb-8 text-center text-3xl font-semibold">
            <h3>Our Story</h3>
          </div>

          <div className="space-y-2 text-center text-5xl font-semibold lg:text-6xl">
            <h2>How it all started</h2>
          </div>
        </div>
      </div>

      <div className="relative py-10">
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
            <div className="flex flex-col items-center overflow-visible">
              <div className="relative">
                <div className="absolute top-0 z-[-1] h-auto w-full lg:left-[-10%] lg:w-[130%]">
                  <Image
                    className="h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape.0a859c18.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-hexagon z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-hexagon h-auto w-full min-w-[20rem] lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/glenlo-abbey_hotel-gway-wedding-venue-beenchanted-wedding-package_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
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

      <div className="relative py-10">
        <div className="absolute top-0 right-[-5%] -z-0 hidden h-full lg:block">
          <Image
            className="h-full w-auto"
            width="467"
            height="720"
            src="/images/shape10.40961834.svg"
            alt=""
          />
        </div>

        <div className="@container mx-auto grid gap-28 lg:gap-10">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 flex flex-col justify-center lg:order-1 lg:text-right">
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 9, 2012
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
              <div className="relative">
                <div className="absolute top-0 z-[-1] h-auto w-full lg:left-[-10%] lg:w-[120%]">
                  <Image
                    className="h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape.0a859c18.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-heart z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-heart h-auto w-full min-w-[20rem] lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/glenlo-abbey_hotel-gway-wedding-venue-beenchanted-wedding-package_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-10">
        <div className="absolute top-0 left-[-5%] -z-0 hidden h-full lg:block">
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
            <div className="flex flex-col items-center overflow-visible">
              <div className="relative">
                <div className="absolute z-[-1] flex h-auto w-full lg:top-[-15%] lg:left-[-10%] lg:w-[120%]">
                  <Image
                    className="h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape.b6046279.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-squircle z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-squircle h-auto w-full lg:min-w-md"
                    width="420"
                    height="660"
                    src="/mockup/glenlo-abbey_hotel-gway-wedding-venue-beenchanted-wedding-package_1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 9, 2012
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
