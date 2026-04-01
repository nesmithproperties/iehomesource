import heroFallback from "@/assets/images/hero-house.png";
import riversideImg from "@/assets/images/cities/riverside.png";
import sanBernardinoImg from "@/assets/images/cities/san-bernardino.png";

export const cityImages: Record<string, string> = {
  "riverside-california": riversideImg,
  "san-bernardino-california": sanBernardinoImg,
};

export function getCityImage(slug: string): string {
  return cityImages[slug] ?? heroFallback;
}
