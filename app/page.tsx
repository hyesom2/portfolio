import About from '@/components/about';
import SlideIn from '@/components/animations/slideIn';
import Github from '@/components/github';
import Profile from '@/components/profile';

export default function Home() {
  return (
    <>
      <SlideIn>
        <Profile />
      </SlideIn>
      <SlideIn>
        <About />
      </SlideIn>
      <SlideIn>
        <Github />
      </SlideIn>
    </>
  );
}
