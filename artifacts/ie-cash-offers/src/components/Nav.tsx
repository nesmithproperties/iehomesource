import { Link, useLocation } from "wouter";
import { Building2, PhoneCall } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/cities", label: "Cities" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export default function Nav() {
  const [location] = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Building2 className="h-8 w-8 text-cyan-600" />
          <span className="font-serif font-black text-xl tracking-tighter text-slate-900 uppercase">
            Inland Empire Home Source
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-5 text-sm font-bold flex-shrink-0">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`uppercase tracking-widest transition-colors ${
                isActive(href)
                  ? "text-cyan-600"
                  : "text-slate-600 hover:text-cyan-600"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="tel:9092026006"
            className="flex items-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-full font-black hover:shadow-xl transition-all"
          >
            <PhoneCall className="h-4 w-4" /> (909) 202-6006
          </a>
        </div>
      </div>
    </nav>
  );
}
