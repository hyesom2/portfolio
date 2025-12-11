'use client';

import type { Guestbook } from '@/types/guestbook';
import Image from 'next/image';

export default function GuestbookItem({
  id,
  nickname,
  content,
  profile_img,
  created_at,
}: Guestbook) {
  return (
    <li
      key={id}
      className='relative flex justify-start items-start gap-4 h-full max-h-[132px] p-4 bg-gray-200 border border-[#eee] rounded-lg overflow-hidden cursor-pointer hover:bg-gray-300'
    >
      <Image
        src={profile_img || '/images/person.webp'}
        alt={`${nickname}님의 게시물`}
        width={100}
        height={100}
        className='flex justify-center items-center shrink-0 w-20 h-20 md:w-[100px] md:h-[100px] bg-white rounded-lg object-cover'
      />
      <div className='flex flex-col gap-2'>
        <h3 className='text-[16px] font-bold md:text-[18px]'>{nickname}</h3>
        <div className='text-[14px] line-clamp-3 md:text-[16px]'>{content}</div>
      </div>
      <time className='absolute top-4 right-4 text-[12px] md:text-[14px]'>
        {created_at.slice(0, 10)}
      </time>
    </li>
  );
}
