'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import { greatVibes } from '@/config/fonts';

const googleCalendarLinks = {
  bride:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tiệc%20cưới%20nhà%20gái%20(Đám%20cưới%20Thu%20An%20-%20Tiến%20Đạt)&dates=20250613T040000Z/20250613T060000Z&details=Cảm%20ơn%20bạn%20đã%20là%20một%20phần%20quan%20trọng%20trong%20hành%20trình%20của%20chúng%20mình!%20Sự%20có%20mặt%20của%20bạn%20sẽ%20làm%20cho%20ngày%20vui%20của%20chúng%20mình%20thêm%20trọn%20vẹn%20và%20ý%20nghĩa.%20Thiệp%20online:%20<a%20target="_blank"%20href="https://thuantiendatwedding.vercel.app">https://thuantiendatwedding.vercel.app</a>&location=Ấp%20Thân%20Đạo,%20Thân%20Cửu%20Nghĩa,%20Châu%20Thành,%20Tiền%20Giang,%20Vietnam&trp=true',
  groom:
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Tiệc%20cưới%20nhà%20trai%20(Đám%20cưới%20Thu%20An%20-%20Tiến%20Đạt)&dates=20250614T040000Z/20250614T060000Z&details=Cảm%20ơn%20bạn%20đã%20là%20một%20phần%20quan%20trọng%20trong%20hành%20trình%20của%20chúng%20mình!%20Sự%20có%20mặt%20của%20bạn%20sẽ%20làm%20cho%20ngày%20vui%20của%20chúng%20mình%20thêm%20trọn%20vẹn%20và%20ý%20nghĩa.%20Thiệp%20online:%20<a%20target="_blank"%20href="https://thuantiendatwedding.vercel.app">https://thuantiendatwedding.vercel.app</a>&location=Ấp%20Tân%20Quới,%20Tân%20Lý%20Đông,%20Châu%20Thành,%20Tiền%20Giang,%20Vietnam&trp=true',
};

const googleMapLinks = {
  bride: 'https://maps.app.goo.gl/E1nr4nTMWHXbcz66A',
  groom: 'https://maps.app.goo.gl/HY7oMnHYVn6K4gA18',
};

const SectionWeddingMonetaryGift: FC = () => {
  return (
    <section
      className="relative bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('/mockup/480852077_1064956642342329_2176700483501458871_n.jpg')",
      }}
    >
      <div className="absolute z-0 h-full w-full backdrop-brightness-50"></div>

      <div className="relative z-[1] py-24 lg:py-20">
        <div className="@container mx-auto px-4 text-white lg:px-10">
          <div className="flex flex-col items-center">
            <h2
              className={`${greatVibes.className} text-center text-4xl font-semibold lg:text-6xl`}
            >
              Sự kiện cưới
            </h2>

            <p className="mt-6 max-w-xl text-center font-medium lg:mt-10 lg:text-lg">
              Bạn khiến cho ngày đặc biệt của chúng mình thêm tuyệt vời và đáng
              nhớ. Hãy đến chung vui và chúc mừng cho chúng mình nhé!
            </p>
          </div>
        </div>

        <div className="px-4 pt-14 lg:px-10">
          <div className="@container mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-rows-1 gap-4 lg:gap-8">
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-card relative rounded-2xl p-6"
              >
                <div className="border-primary-300 absolute top-6 right-4 bottom-6 left-4 rounded border-y"></div>
                <div className="border-primary-300 absolute top-4 right-6 bottom-4 left-6 rounded border-y"></div>
                <div className="border-primary-300 absolute top-6 right-4 bottom-6 left-4 rounded border-x"></div>
                <div className="border-primary-300 absolute top-4 right-6 bottom-4 left-6 rounded border-x"></div>

                <div className="absolute top-0 h-auto w-full">
                  <Image
                    src="images/shape6.5390e515.svg"
                    alt=""
                    width="375"
                    height="289"
                    className="h-auto w-full"
                  />
                </div>

                <div className="relative z-[1] flex flex-col items-center justify-center p-6">
                  <div
                    className="mask h-40 w-40 overflow-hidden"
                    style={{ maskImage: 'url(/images/mask3.89a7b89c56df.svg)' }}
                  >
                    <Image
                      src="/mockup/476121996_1047898757381451_424632599530424998_n.jpg"
                      alt="Wedding Event"
                      width="400"
                      height="400"
                      className="h-full w-full rounded-full"
                    />
                  </div>

                  <h2 className="mb-4 text-3xl font-medium">
                    Tiệc cưới nhà gái
                  </h2>

                  <p className="mb-2 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"></path>
                    </svg>

                    <span className="ml-2">11:00 - 13/06/2025</span>
                  </p>

                  <p className="mb-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path>
                    </svg>

                    <span className="ml-2">
                      Tư gia nhà gái - ấp Thân Đạo, xã Thân Cửu Nghĩa, huyện
                      Châu Thành, Tiền Giang
                    </span>
                  </p>

                  <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                    <a
                      target="_blank"
                      href={googleCalendarLinks.bride}
                      className="btn btn-primary uppercase"
                    >
                      Thêm vào lịch
                    </a>

                    <a
                      target="_blank"
                      href={googleMapLinks.bride}
                      className="btn btn-primary uppercase"
                    >
                      Chỉ đường
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-card relative rounded-2xl p-6"
              >
                <div className="border-primary-300 absolute top-6 right-4 bottom-6 left-4 rounded border-y"></div>
                <div className="border-primary-300 absolute top-4 right-6 bottom-4 left-6 rounded border-y"></div>
                <div className="border-primary-300 absolute top-6 right-4 bottom-6 left-4 rounded border-x"></div>
                <div className="border-primary-300 absolute top-4 right-6 bottom-4 left-6 rounded border-x"></div>

                <div className="absolute top-0 h-auto w-full">
                  <Image
                    src="images/shape6.5390e515.svg"
                    alt=""
                    width="375"
                    height="289"
                    className="h-auto w-full"
                  />
                </div>

                <div className="relative z-[1] flex flex-col items-center justify-center p-6">
                  <div
                    className="mask h-40 w-40 overflow-hidden"
                    style={{ maskImage: 'url(/images/mask4.89b0d9a97f.svg)' }}
                  >
                    <Image
                      src="/mockup/476121996_1047898757381451_424632599530424998_n.jpg"
                      alt="Wedding Event"
                      width="400"
                      height="400"
                      className="h-full w-full rounded-full"
                    />
                  </div>

                  <h2 className="mb-4 text-3xl font-medium">
                    Tiệc cưới nhà trai
                  </h2>

                  <p className="mb-2 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"></path>
                    </svg>

                    <span className="ml-2">11:00 - 14/06/2025</span>
                  </p>

                  <p className="mb-6 text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline h-6 w-4"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path>
                    </svg>

                    <span className="ml-2">
                      Tư gia nhà trai - ấp Tân Quới, xã Tân Lý Đông, huyện Châu
                      Thành, Tiền Giang
                    </span>
                  </p>

                  <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
                    <a
                      target="_blank"
                      href={googleCalendarLinks.groom}
                      className="btn btn-primary uppercase"
                    >
                      Thêm vào lịch
                    </a>

                    <a
                      target="_blank"
                      href={googleMapLinks.groom}
                      className="btn btn-primary uppercase"
                    >
                      Chỉ đường
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWeddingMonetaryGift;
