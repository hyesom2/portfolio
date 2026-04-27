'use client';

import { useEffect, useState } from 'react';

export default function Spinner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      const timer = setTimeout(() => setVisible(false), 0);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => setVisible(false);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 inset-0 flex items-center justify-center w-full bg-[#eee]/10 z-99'>
      <div className='relative w-10 h-10'>
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className='absolute w-2 h-2 rounded-full bg-gray-800'
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${i * 30}deg) translate(16px) translateY(-50%)`,
              animationName: 'spinner-fade',
              animationDuration: '1s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationDelay: `${-(1 - i / 12).toFixed(2)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
