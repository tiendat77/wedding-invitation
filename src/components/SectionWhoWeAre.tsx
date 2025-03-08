import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute bottom-[10%] left-[-35%] z-[-1] h-auto w-2/3">
              <Image
                className="h-auto w-full"
                src="/images/shape7.089684a2.svg"
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
                src="/mockup/481077062_1062266712611322_7329629910618810825_n.jpg"
                width="500"
                height="500"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-2 lg:max-w-lg">
            <div className="mb-8 text-center text-5xl sm:text-6xl xl:text-7xl 2xl:text-7xl">
              <h2 className={greatVibes.className}>Thu An</h2>
            </div>

            <div className="mb-8 space-y-2 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dolorum deserunt veritatis provident nobis nihil iste, excepturi
                maiores laboriosam asperiores perspiciatis labore iure
                dignissimos dolores soluta. Est eaque illum dolores!
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/facebook-logo.svg"
                  alt=""
                />
              </Link>

              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/instagram-logo.svg"
                  alt=""
                />
              </Link>

              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/zalo-logo.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid place-items-end gap-4 lg:grid-cols-3 lg:gap-10">
          <div className="order-2 flex flex-col justify-center lg:order-1 lg:col-span-2 lg:max-w-lg">
            <div className="mb-8 text-center text-5xl sm:text-6xl xl:text-7xl 2xl:text-7xl">
              <h2 className={greatVibes.className}>Tiến Đạt</h2>
            </div>

            <div className="mb-8 space-y-2 text-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                dolorum deserunt veritatis provident nobis nihil iste, excepturi
                maiores laboriosam asperiores perspiciatis labore iure
                dignissimos dolores soluta. Est eaque illum dolores!
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/facebook-logo.svg"
                  alt=""
                />
              </Link>

              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/instagram-logo.svg"
                  alt=""
                />
              </Link>

              <Link href="#">
                <Image
                  className="h-6 w-6"
                  width="100"
                  height="100"
                  src="/images/zalo-logo.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>

          <div className="relative order-1 flex flex-col items-center justify-center lg:order-2">
            <div className="absolute right-0 bottom-[10%] z-[-1] h-auto w-2/3 lg:right-[-10%]">
              <Image
                className="h-auto w-full"
                src="/images/shape8.089684a2.svg"
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
                src="/mockup/474803858_1042895947881732_7326705137152826489_n.jpg"
                width="500"
                height="500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
