import { STYLING_DATA } from '@/data/skillsData';
import Image from 'next/image';

export default function Styling() {
  return (
    <section>
      <h2 className='text-[32px] text-gray-500 font-bold mb-5'>스타일링</h2>
      <ul className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {STYLING_DATA.map(({ id, title, content, img_url }) => (
          <li
            key={id}
            className='flex justify-start items-center gap-4 border-b border-[#eee] py-4 md:py-6'
          >
            <Image
              src={img_url}
              alt={title}
              width={30}
              height={30}
              className='rounded-lg'
            />
            <div className='flex flex-col justify-start items-start gap-2 md:flex-row md:items-center'>
              <h3 className='w-[120px] shrink-0 font-bold text-[18px] md:text-[20px]'>
                {title}
              </h3>
              <p className='text-[14px] md:text-[16px]'>{content}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
