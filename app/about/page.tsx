import AboutMe from '@/components/about';
import SlideIn from '@/components/animations/slideIn';
import Experience from '@/components/experience';
import Profile from '@/components/profile';
import Skills from '@/components/skills';

export const metadata = {
  title: '소개 - 김현주 | 포트폴리오',
  description: '프론트엔드 개발자 김현주의 소개 페이지입니다.',
};

export default function About() {
  return (
    <>
      <SlideIn>
        <Profile />
      </SlideIn>
      <SlideIn>
        <AboutMe />
      </SlideIn>
      <SlideIn>
        <Experience />
      </SlideIn>
      <Skills />
    </>
  );
}
