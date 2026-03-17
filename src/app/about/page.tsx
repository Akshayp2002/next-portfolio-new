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
  const supabase = createSupabaseServerClient();
  let testimonials: {
    id: number;
    quote: string;
    name: string;
    position: string;
    company: string;
    rating: number;
    createdAt: string;
  }[] = [];

  if (supabase) {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, position, company, review, rating, created_at")
      .eq("is_approved", true)
      .order("created_at", { ascending: false })
      .limit(12);

    if (error) {
      console.error("Failed to load Supabase reviews:", error.message);
    } else {
      testimonials = (data as SupabaseReviewRow[]).map((item) => ({
        id: item.id,
        quote: item.review,
        name: item.name,
        position: item.position,
        company: item.company,
        rating: item.rating ?? 5,
        createdAt: item.created_at,
      }));
    }
  }

  return <AboutContent testimonials={testimonials} />;
}