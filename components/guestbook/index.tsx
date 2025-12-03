'use client';

import type { Guestbook } from '@/types/guestbook';
import { createClient } from '@/utils/supabase/client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const PER_PAGE = 3;

export default function Guestbook() {
  const supabase = createClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const [guestbookData, setGuestbookData] = useState<Guestbook[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGuestbookData() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('guestbook')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.error(
            '방명록 데이터를 가져오던 중 오류가 발생했습니다. : ',
            error,
          );
          return;
        }

        setGuestbookData(data || []);
      } catch (error) {
        console.error('오류가 발생했습니다. : ', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGuestbookData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const page = Number(searchParams.get('page') ?? 1);
  const total = guestbookData.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const startIndex = (page - 1) * PER_PAGE;
  const sliced = [...guestbookData].slice(startIndex, startIndex + PER_PAGE);

  const movePage = (p: number) => router.push(`/guestbook?page=${p}`);
  const handleMore = () => router.push('/guestbook');

  return (
    <section className='flex flex-col items-center gap-6 py-5 md:items-start'>
      <h2 className='text-[40px] font-black uppercase'>guestbook</h2>
      {isLoading ? (
        <p className='text-center'>방명록 데이터를 가져오는 중 입니다...</p>
      ) : (
        <>
          <ul className='grid grid-cols-1 gap-4 w-full md:gap-6'>
            {sliced.map(
              ({ id, nickname, content, profile_img, created_at }) => (
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
                    <h3 className='text-[16px] font-bold md:text-[18px]'>
                      {nickname}
                    </h3>
                    <div className='text-[14px] line-clamp-3 md:text-[16px]'>
                      {content}
                    </div>
                  </div>
                  <span className='absolute top-4 right-4 text-[12px] md:text-[14px]'>
                    {created_at.slice(0, 10)}
                  </span>
                </li>
              ),
            )}
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
          {segments[0] === 'guestbook' && (
            <div className='flex justify-center gap-2 mt-4'>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => movePage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    page === i + 1 ? 'font-bold bg-gray-300' : ''
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
