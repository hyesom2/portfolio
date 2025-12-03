'use client';

import { ABOUT_DATA } from '@/data/aboutData';
import { usePathname, useRouter } from 'next/navigation';

export default function About() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const handleMore = () => {
    router.push('/about');
  };

  return (
    <section className='flex flex-col items-center gap-6 py-5 md:items-start'>
      <h2 className='text-[40px] font-black uppercase'>about me</h2>
      <ul className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
        {ABOUT_DATA.map(({ id, title, content }) => (
          <li
            key={id}
            className='flex flex-col items-center gap-2 py-2 md:items-start'
          >
            <h3 className='text-[20px] font-bold md:text-[24px]'>{title}</h3>
            <div className='text-center md:text-start'>
              {content.map((line, index) => (
                <p key={index} className='text-[14px] md:text-[16px]'>
                  {line}
                  {index !== content.length - 1 && <br />}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ul>
      {segments[0] !== 'about' && (
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
