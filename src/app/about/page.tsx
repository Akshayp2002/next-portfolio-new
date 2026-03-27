import AboutContent from "@/components/tiles/about/AboutContent";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type SupabaseReviewRow = {
  id: number;
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number | null;
  created_at: string;
};

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  return <AboutContent />;
}