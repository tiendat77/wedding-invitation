'use client';

import { FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import { loversQuarrel } from '@/config/fonts';

const MemoryBookForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [wishes, setWishes] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name) {
      alert('Bạn chưa nhập tên! 😔');
      return;
    }

    if (!wishes) {
      alert('Viết vài lời yêu thương đi nào! 💌');
      return;
    }

    setIsLoading(true);

    const form = new FormData();
    form.append('entry.668408762', name);
    form.append('entry.1187142298', wishes);

    fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSecqvkbZnJgv6Hz-RYv8Wwj9Wq3MJ7xdG54YXdKnQi5uDjQOQ/formResponse',
      {
        method: 'POST',
        body: form,
        mode: 'no-cors',
      }
    )
      .then(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error(error);
        alert('Có lỗi xảy ra, thử lại nhé!');
        setIsLoading(false);
      });
  };

  if (isSubmitted) {
    return (
      <div
        className={`${loversQuarrel.className} relative flex flex-col items-center justify-center overflow-hidden px-4 py-24 lg:px-6`}
      >
        <Image
          src="/images/shape19.12c89a01d967.svg"
          alt=""
          width="857"
          height="585"
          className="absolute right-[-25%] bottom-[-10%] z-0 hidden h-2/3 w-auto lg:block"
        />
        <Image
          src="/images/shape20.789b9a887c.svg"
          alt=""
          width="857"
          height="585"
          className="absolute right-[-20%] bottom-0 z-0 hidden h-2/3 w-auto lg:block"
        />
        <Image
          src="/images/shape21.890f0789c0b.svg"
          alt=""
          width="857"
          height="585"
          className="absolute top-0 left-0 z-0 h-2/3 w-auto object-cover"
        />

        <h3 className="z-1 text-center text-5xl lg:text-6xl">
          Cảm ơn bạn rất nhiều vì những lời chúc tốt đẹp!
        </h3>

        <p className="z-1 mt-6 text-center text-3xl lg:text-4xl">
          Chúc bạn cũng luôn bình an và hạnh phúc!
        </p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col p-4 lg:p-6"
      onSubmit={(e) => handleSubmit(e)}
    >
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Tên của bạn là gì?</legend>
        <input
          type="text"
          className="input w-full"
          placeholder="Nhập họ tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Lời chúc</legend>
        <textarea
          rows={5}
          className="textarea w-full"
          placeholder="Nhập lời chúc của bạn"
          value={wishes}
          onChange={(e) => setWishes(e.target.value)}
        ></textarea>
      </fieldset>

      <button
        type="submit"
        disabled={isLoading}
        className="btn btn-soft btn-primary mt-4"
      >
        {isLoading ? 'Đang gửi...' : 'Gửi lời chúc'}
      </button>
    </form>
  );
};

export default MemoryBookForm;
