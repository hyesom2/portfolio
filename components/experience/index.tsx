import { EXPERIENCE_DATA } from '@/data/experienceData';

export default function Experience() {
  return (
    <section className='flex flex-col items-center gap-4 py-5 md:items-start md:gap-6'>
      <h2 className='text-[40px] font-black uppercase'>experience</h2>
      <ul className='grid grid-cols-1 w-full'>
        {[...EXPERIENCE_DATA]
          .reverse()
          .map(({ id, title, startDate, endDate, content }) => (
            <li
              key={id}
              className='flex flex-col justify-start items-center gap-4 py-4 border-b border-[#eee] md:flex-row md:items-start md:py-6'
            >
              <div className='flex flex-col items-center gap-1 md:items-start'>
                <h3 className='text-[20px] font-bold md:text-[24px] md:w-[420px]'>
                  {title}
                </h3>
                <span>{`${startDate} ~ ${endDate}`}</span>
              </div>
              <div className='text-start'>
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
    </section>
  );
}
