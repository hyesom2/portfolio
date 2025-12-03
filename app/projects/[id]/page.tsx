'use client';

import SlideIn from '@/components/animations/slideIn';
import { PROJECT_DATA } from '@/data/projectData';
import { Link as LinkIcon } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function ProjectDetail() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const currentProjectName = segments[1];

  const currentProject = PROJECT_DATA.find(
    (project) => project.title_en === currentProjectName,
  );

  const resultCount = currentProject?.results.length || 3;
  const resultsGridCols = resultCount === 3 ? 'grid-cols-3' : 'grid-cols-2';

  const handleMoveUrl = (href: string) => window.open(href);

  return (
    <SlideIn>
      {currentProject ? (
        <section className='flex flex-col gap-10 py-5 md:gap-20'>
          <div className='flex flex-col justify-center items-center gap-2 md:gap-4'>
            <h2 className='text-[40px] font-black uppercase'>
              {currentProject.title}
            </h2>
            <p className='text-[20px] font-bold'>{currentProject.subTitle}</p>
            <div className='flex justify-center items-center gap-4'>
              <button
                type='button'
                className='flex justify-center items-center gap-2 cursor-pointer text-[16px]  border border-[#eee] px-4 py-2 rounded-full md:text-[20px] hover:font-bold hover:bg-[#eee]'
                onClick={() => handleMoveUrl(currentProject.github_url)}
              >
                <LinkIcon size={20} />
                Github
              </button>
              <button
                className='flex justify-center items-center gap-2 cursor-pointer text-[16px] border border-[#eee] px-4 py-2 rounded-full md:text-[20px] hover:font-bold hover:bg-[#eee]'
                onClick={() => handleMoveUrl(currentProject.demo_url)}
              >
                <LinkIcon size={20} />
                Demo
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src={currentProject.main_image}
              alt={currentProject.title}
              width={500}
              height={300}
              className='object-cover'
            />
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>개요</h3>
            <p>{currentProject.description}</p>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>개발 기간</h3>
            <p>{`${currentProject.start_date} ~ ${currentProject.end_date}`}</p>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>참여 인원</h3>
            <p>{currentProject.participation}</p>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>기술 스택</h3>
            <ul className='flex flex-wrap justify-start items-center gap-2 md:flex-nowrap'>
              {currentProject.skills.map((skill, index) => (
                <li
                  key={index}
                  className='flex justify-center items-center border border-[#eee] rounded-full px-2.5 py-1 text-[14px] md:text-[16px]'
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>담당 역할</h3>
            <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
              {currentProject.roles.map((role) => (
                <li
                  key={role.id}
                  className='flex flex-col justify-start items-center gap-2 p-4 border border-[#eee] rounded-lg md:gap-4 md:p-6'
                >
                  <h4 className='text-[18px] text-center font-bold md:text-[20px]'>
                    {role.title}
                  </h4>
                  <div className='w-full max-h-[100px] overflow-y-scroll scrollbar-hide md:max-h-[150px]'>
                    <p className='text-[14px] md:text-[16px]'>
                      {role.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>주요 기능</h3>
            <ul className='flex flex-col justify-start items-start gap-2'>
              {currentProject.main_functions.map((fn, index) => (
                <li key={index} className='flex justify-center items-center'>
                  {`${index + 1}. ${fn}`}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>서비스 화면</h3>
            <p></p>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <h3 className='text-[40px] font-black uppercase'>성과 및 배운점</h3>
            <ul
              className={`grid grid-cols-1 gap-4 md:${resultsGridCols} md:gap-6`}
            >
              {currentProject.results.map((result) => (
                <li
                  key={result.id}
                  className='flex flex-col justify-start items-center gap-2 p-4 border border-[#eee] rounded-lg md:gap-4 md:p-6'
                >
                  <h4 className='text-[18px] text-center font-bold md:text-[20px]'>
                    {result.title}
                  </h4>
                  <div className='w-full max-h-[100px] overflow-y-scroll scrollbar-hide md:max-h-[150px]'>
                    <p className='text-[14px] md:text-[16px]'>
                      {result.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : (
        <p>프로젝트를 찾을 수 없습니다.</p>
      )}
    </SlideIn>
  );
}
