import heroFallback from "@/assets/images/hero-house.png";
import riversideImg from "@/assets/images/cities/riverside.png";
import sanBernardinoImg from "@/assets/images/cities/san-bernardino.png";
import fontanaImg from "@/assets/images/cities/fontana.png";
import morenoValleyImg from "@/assets/images/cities/moreno-valley.png";
import ranchoCucamongaImg from "@/assets/images/cities/rancho-cucamonga.jpg";
import ontarioImg from "@/assets/images/cities/ontario.jpg";
import coronaImg from "@/assets/images/cities/corona.jpg";
import victorvilleImg from "@/assets/images/cities/victorville.jpg";
import murrietaImg from "@/assets/images/cities/murrieta.jpg";
import temeculaImg from "@/assets/images/cities/temecula.png";
import rialtoImg from "@/assets/images/cities/rialto.jpg";
import hesperiaImg from "@/assets/images/cities/hesperia.jpg";

export const cityImages: Record<string, string> = {
  "riverside-california": riversideImg,
  "san-bernardino-california": sanBernardinoImg,
  "fontana-california": fontanaImg,
  "moreno-valley-california": morenoValleyImg,
  "rancho-cucamonga-california": ranchoCucamongaImg,
  "ontario-california": ontarioImg,
  "corona-california": coronaImg,
  "victorville-california": victorvilleImg,
  "murrieta-california": murrietaImg,
  "temecula-california": temeculaImg,
  "rialto-california": rialtoImg,
  "hesperia-california": hesperiaImg,
};

export function getCityImage(slug: string): string {
  return cityImages[slug] ?? heroFallback;
}
