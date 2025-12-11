import type { Guestbook, GuestbookResponse } from '@/types/guestbook';
import { createClient } from '@/utils/supabase/client';

export async function getGuestbook(
  page: number = 1,
): Promise<GuestbookResponse> {
  const supabase = createClient();
  const PAGE_SIZE = 3;

  const { data, count } = await supabase
    .from('guestbook')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1);

  return {
    items: (data as Guestbook[]) || [],
    total: count || 0,
    pageSize: PAGE_SIZE,
  };
}
