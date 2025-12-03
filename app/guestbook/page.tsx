import SlideIn from '@/components/animations/slideIn';
import GuestbookList from '@/components/guestbook';

export default function Guestbook() {
  return (
    <SlideIn>
      <GuestbookList />
    </SlideIn>
  );
}
