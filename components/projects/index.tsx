'use client';

import { PROJECT_DATA } from '@/data/projectData';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Projects() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const isProjectsPage = segments[0] === 'projects';

  const [count, setCount] = useState(() =>
    isProjectsPage ? PROJECT_DATA.length : 2,
  );

  useEffect(() => {
    if (isProjectsPage) return;

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateCount = () => {
      setCount(mediaQuery.matches ? 4 : 2);
    };

    updateCount();

    mediaQuery.addEventListener('change', updateCount);

    return () => mediaQuery.removeEventListener('change', updateCount);
  }, [isProjectsPage]);

  const slicedProjects = [...PROJECT_DATA].reverse().slice(0, count);

  const handleMore = () => router.push('/projects');
  const handleProject = (title: string) => router.push(`/projects/${title}`);

  return (
    <section className='flex flex-col items-center gap-6 py-5 md:items-start'>
      <h2 className='text-[40px] font-black uppercase'>projects</h2>
      <ul className='grid grid-cols-1 gap-4 w-full md:grid-cols-2 md:gap-6'>
        {slicedProjects.map(({ id, title, title_en, subTitle, main_image }) => (
          <li
            key={id}
            className={`flex flex-col items-center gap-2 bg-gray-200 border border-[#eee] rounded-lg overflow-hidden md:items-start transition duration-300 hover:cursor-pointer hover:scale-[1.03]`}
            onClick={() => handleProject(title_en)}
          >
            <div className='relative w-full h-[140px] md:h-[220px]'>
              <Image
                src={main_image}
                alt={title}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
                className='bg-white object-contain'
              />
            </div>
            <div className='flex flex-col gap-1 w-full p-4 md:p-6'>
              <h3 className='text-[20px] font-bold md:text-[24px]'>{title}</h3>
              <p className='text-[14px] md:text-[16px]'>{subTitle}</p>
            </div>
          </li>
        ))}
      </ul>
      {segments[0] !== 'projects' && (
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
