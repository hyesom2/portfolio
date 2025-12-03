'use client';

export default function Github() {
  const handleMore = () => window.open('https://github.com/hyesom2');

  return (
    <section className='pt-5'>
      <div className='flex flex-col items-center gap-6 bg-[#eee] border border-gray-300 rounded-lg p-6'>
        <h2 className='text-[24px] md:text-[60px] font-black'>
          제 GitHub도 구경해보세요.
        </h2>
        <button
          type='button'
          className='bg-gray-200 p-2 text-[16px] border border-gray-300 rounded-lg cursor-pointer md:p-4 md:text-[20px] hover:bg-gray-300'
          onClick={handleMore}
        >
          🚀 Go To Github
        </button>
      </div>
    </section>
  );
}
