import '@/app/globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../fonts/pretendard/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: '김현주 | 포트폴리오',
  description: 'Next.js의 AppRouter로 제작한 포트폴리오 사이트 입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={`${pretendard.variable}`}>
      <body className={`relative ${pretendard.className} antialiased`}>
        <Header />
        <main className='flex flex-col w-full h-full px-6 pt-16 pb-5 mx-auto md:gap-20 md:max-w-[1200px] md:px-0 md:pt-24 md:pb-5'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
