'use client';

import GuestbookItem from '@/components/guestbook/guestbook-item';
import { getGuestbook } from '@/lib/supabase-guestbook';
import type { Guestbook } from '@/types/guestbook';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface initialDataProps {
  initialData: {
    items: Guestbook[];
    total: number;
    pageSize: number;
  };
}

export default function GuestbookClient({ initialData }: initialDataProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || 1);

  const [items, setItems] = useState(initialData.items);
  const [total, setTotal] = useState(initialData.total);
  const pageSize = initialData.pageSize;

  const lastPage = Math.ceil(total / pageSize);

  useEffect(() => {
    async function fetchData() {
      const data = await getGuestbook(page);
      setItems(data.items);
      setTotal(data.total);
    }
    fetchData();
  }, [page]);

  return (
    <section
      className='flex flex-col items-center gap-6 w-full py-5 md:items-start'
      aria-labelledby='guestbook-full'
    >
      <h1 id='guestbook-full' className='text-[40px] font-black uppercase'>
        guestbook
      </h1>
      <ul className='grid grid-cols-1 gap-4 w-full md:gap-6'>
        {items.map((item: Guestbook, i: number) => (
          <GuestbookItem key={i} {...item} />
        ))}
      </ul>
      <div className='flex gap-2 justify-center mt-4'>
        <button
          disabled={page <= 1}
          onClick={() => router.push(`?page=${page - 1}`)}
          className='px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
        >
          이전
        </button>
        <button
          disabled={page >= lastPage}
          onClick={() => router.push(`?page=${page + 1}`)}
          className='px-3 py-1 border rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
        >
          다음
        </button>
      </div>
    </section>
  );
}
