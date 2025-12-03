import About from '@/components/about';
import SlideIn from '@/components/animations/slideIn';
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
    </>
  );
}
