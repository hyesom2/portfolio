import About from '@/components/about';
import SlideIn from '@/components/animations/slideIn';
import Github from '@/components/github';
import GuestbookPreview from '@/components/guestbook/guestbook-preview';
import Profile from '@/components/profile';
import Projects from '@/components/projects';
import { getGuestbook } from '@/lib/supabase-guestbook';

export default async function Home() {
  const items = await getGuestbook(1);

  return (
    <>
      <SlideIn>
        <Profile />
      </SlideIn>
      <SlideIn>
        <About />
      </SlideIn>
      <SlideIn>
        <Projects />
      </SlideIn>
      <SlideIn>
        <GuestbookPreview items={items.items} />
      </SlideIn>
      <SlideIn>
        <Github />
      </SlideIn>
    </>
  );
}
