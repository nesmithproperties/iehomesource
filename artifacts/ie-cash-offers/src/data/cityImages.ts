import heroFallback from "@/assets/images/hero-house.png";
import riversideImg from "@/assets/images/cities/riverside.png";

export const cityImages: Record<string, string> = {
  "riverside-california": riversideImg,
};

export function getCityImage(slug: string): string {
  return cityImages[slug] ?? heroFallback;
}
