'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Profile() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const currentPage = segments[0];

  return (
    <section className='py-5'>
      <div className='flex flex-col items-center gap-4 md:items-start'>
        {currentPage === 'about' ? (
          <Image
            src='/images/resume.webp'
            alt='김현주 프로필'
            width={120}
            height={180}
            className='w-[120px] h-[180px] md:w-[140px] md:h-[200px] rounded-lg border border-[#eee] object-cover'
          />
        ) : (
          <Image
            src='/images/profile.webp'
            alt='김현주 프로필'
            width={140}
            height={140}
            className='w-[140px] h-[140px] md:w-[200px] md:h-[200px] rounded-full object-cover'
          />
        )}
        <div className='flex flex-col items-center gap-1 md:items-start'>
          <h2 className='text-[40px] font-black'>김현주</h2>
          <strong className='text-[24px] font-bold text-gray-600'>
            Frontend Developer
          </strong>
        </div>
        <p className='text-[14px] text-center font-semibold text-gray-400 md:text-[20px] md:text-start'>
          안녕하세요. 저는 웹 프론트엔드 신입 개발자 김현주 입니다.
          <br />
          사용자에게 즐거움과 최고의 경험을 드리는 것을 추구합니다.
        </p>
        {currentPage === 'about' && (
          <p className='text-[14px] text-start font-regular text-black md:text-[16px]'>
            저는 프론트엔드 개발자로서 사용자에게 즐거움을 주고, 어떤 환경에서도
            최적의 사용자 경험을 제공할 수 있는 웹사이트를 제작하는 것을
            추구합니다.
            <br />
            프론트엔드 개발자는 단순히 웹 화면을 구현하는 것에서 그치지 않고,
            사용자와 소통하는 직업입니다.
            <br />
            사용자 인터페이스를 설계 때 여러 디자인과 접근성을 고려한 개발을
            중요시하며, 이를 통해 사용자가 어떤 디바이스와 환경에서도 누구나
            쉽게 이용할 수 있는 서비스를 만들고 싶습니다.
          </p>
        )}
      </div>
    </section>
  );
}
