import GuestbookClient from '@/app/guestbook/guestbook-client';
import SlideIn from '@/components/animations/slideIn';
import { getGuestbook } from '@/lib/supabase-guestbook';
import { Suspense } from 'react';

export default async function Page() {
  const initialData = await getGuestbook(1);

  return (
    <Suspense fallback={<div>Loading guestbook...</div>}>
      <SlideIn>
        <GuestbookClient initialData={initialData} />
      </SlideIn>
    </Suspense>
  );
}
