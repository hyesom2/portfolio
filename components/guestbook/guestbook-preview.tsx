'use client';

import GuestbookItem from '@/components/guestbook/guestbook-item';
import type { Guestbook } from '@/types/guestbook';
import { usePathname, useRouter } from 'next/navigation';

interface GuestbookItemsProps {
  items: Guestbook[];
}

export default function GuestbookPreview({ items }: GuestbookItemsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const handleMore = () => router.push('/guestbook');

  return (
    <section className='flex flex-col items-center gap-6 py-5 md:items-start'>
      <h2 className='text-[40px] font-black uppercase'>guestbook</h2>
      <ul className='grid grid-cols-1 gap-4 w-full md:gap-6'>
        {items.slice(0, 3).map((item) => (
          <GuestbookItem key={item.id} {...item} />
        ))}
      </ul>
      {segments[0] !== 'guestbook' && (
        <button
          type='button'
          className='flex justify-center items-center py-2 px-4 text-[18px] border border-[#eee] rounded-lg mx-auto md:text-[20px] hover:cursor-pointer hover:font-bold hover:bg-[#eee]'
          onClick={handleMore}
        >
          more
        </button>
      )}
    </section>
  );
}
