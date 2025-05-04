'use client';

import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import { piklabAndrade } from '@/config/fonts';

const SectionOurStory: FC = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-20">
      <div className="@container relative z-1 mx-auto px-4 lg:px-10">
        <div className="mb-20 flex flex-col items-center">
          <h2
            className={`${piklabAndrade.className} text-center text-5xl leading-normal font-semibold lg:text-6xl`}
          >
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
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-[-1] flex flex-col items-center overflow-visible"
            >
              <div className="group relative">
                <div className="absolute top-[-25%] z-[-1] h-auto w-[50%] lg:top-[-30%] lg:left-0 lg:w-[60%]">
                  <Image
                    className="animated-floating-2 h-auto w-full"
                    width="420"
                    height="660"
                    src="/images/shape33.9003c289a8413516aae87288e.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-hexagon z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-hexagon h-auto w-full min-w-[20rem] transition duration-300 group-hover:scale-105 lg:min-w-md"
                    width="420"
                    height="660"
                    src="/album/10402686_620307731410378_2798346393322730000_n.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: 150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-1 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 9, 2012
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Lần đầu gặp mặt</h2>
              </div>

              <div>
                <p className="text-center lg:text-left">
                  Hồi đó, hai đứa mình gặp nhau khi vừa bước chân vào lớp 10,
                  cái tuổi còn mơ màng với sách vở và những buổi chiều tan
                  trường. Lúc đầu chẳng có gì đặc biệt đâu, chỉ là hai khuôn mặt
                  lẫn trong đám đông, thoáng qua như gió lùa qua hàng cây. Rồi
                  những lần làm việc nhóm, những chuyến đi chơi cùng lũ bạn,
                  chúng mình bắt đầu để ý nhau, ánh mắt, nụ cười, cứ thế len lỏi
                  vào lòng nhau.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="absolute top-0 left-[-4rem] z-0 hidden h-full lg:block">
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
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-1 order-2 flex flex-col justify-center text-center lg:order-1 lg:text-right"
            >
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 10, 2013
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Bắt đầu hẹn hò</h2>
              </div>

              <div>
                <p className="text-center lg:text-right">
                  Tụi mình chính thức hẹn hò vào một buổi trưa hè trước khi vào
                  lớp 11, ngay giữa sân trường, nơi nắng lung linh lọc qua tán
                  liễu và phượng vĩ đỏ rực một góc trời. Trước đó, qua mấy lần
                  đi chơi chung với đám bạn, rồi vài buổi nghỉ hè chỉ có hai đứa
                  lang thang đâu đó, lòng đã nhen lên chút gì khó tả. Hôm ấy,
                  ngồi trên ghế đá, giữa tiếng ve kêu ran ran sau kỳ nghỉ, một
                  đứa ngập ngừng nói &quot;Thích cậu thật đấy&quot;, đứa kia
                  cười bẽn lẽn, thế là thành đôi. Tình yêu đến như cánh hoa
                  phượng rơi khẽ, lặng lẽ mà vương đầy kỷ niệm.
                </p>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: 150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-[-1] order-1 flex flex-col items-center overflow-visible lg:order-2"
            >
              <div className="group relative">
                <div className="absolute top-[-20%] left-[20%] z-[-1] h-auto w-[50%] lg:top-[-30%] lg:left-[10%] lg:w-[60%]">
                  <Image
                    className="animated-floating-2 h-auto w-full"
                    width="588"
                    height="800"
                    src="/images/shape34.3e2b59f47ad70cd03bf56f19b29.png"
                    alt=""
                  />
                </div>

                <div className="mask mask-heart z-1 overflow-hidden bg-white p-3">
                  <Image
                    className="mask mask-heart h-auto w-full min-w-[20rem] transition duration-300 group-hover:scale-105 lg:min-w-md"
                    width="420"
                    height="660"
                    src="/album/ae2ea86073403aec6c1799c14c20676a23df296cffea5856f60f2856f9bafdae.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative px-4 py-14 lg:px-10 lg:py-26">
        <div className="absolute top-0 right-0 z-0 hidden h-full lg:block">
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
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: -150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="group relative z-[-1] flex flex-col items-center overflow-visible"
            >
              <div className="relative">
                <div className="absolute top-[-30%] left-[10%] z-[-1] h-auto w-[55%] lg:top-[-45%] lg:left-0 lg:w-[80%]">
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
                    src="/album/0d8b43f72663b121064b86678fe22a22ef4b2be6f6000d558f91ac344987cd2d.JPG"
                    alt=""
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.5, x: 150 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative z-1 flex flex-col justify-center text-center lg:text-left"
            >
              <div className="mb-4">
                <span className="text-primary font-bold lg:text-xl">
                  Tháng 1, 2025
                </span>
              </div>

              <div className="mb-6 text-3xl font-bold lg:text-4xl">
                <h2>Giây phút cầu hôn</h2>
              </div>

              <div>
                <p className="text-center lg:text-left">
                  Sau hơn mười năm bên nhau, trải qua bao sóng gió, giây phút ấy
                  đến vào một buổi tối lộng lẫy giữa khu vườn đầy hoa, nơi yên
                  bình chim hót. Anh đứng đó, dưới trời sao lung linh, hơi run
                  run cầm tay em, rồi bất ngờ quỳ xuống, nói những lời mà em đã
                  mơ từ lâu. Em lặng đi, tim đập rộn ràng như ngày đầu gặp gỡ,
                  rồi gật đầu, để tình yêu hóa thành khúc hát dịu dàng trong
                  gió.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOurStory;
