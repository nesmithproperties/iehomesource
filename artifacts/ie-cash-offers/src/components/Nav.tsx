import { Link, useLocation } from "wouter";
import { Building2 } from "lucide-react";

const links = [
  { href: "/", label: "Home", isRouter: true },
  { href: "/cities", label: "Cities", isRouter: true },
  { href: "/#why-us", label: "Why Us", isRouter: false },
  { href: "/#how-it-works", label: "Our Process", isRouter: false },
  { href: "/#faqs", label: "FAQs", isRouter: false },
  { href: "/blog", label: "Blog", isRouter: true },
  { href: "/contact", label: "Contact Us", isRouter: true },
];

export default function Nav() {
  const [location] = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.startsWith("/#")) return false;
    return location.startsWith(href);
  };

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
          {links.map(({ href, label, isRouter }) =>
            isRouter ? (
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
            ) : (
              <a
                key={href}
                href={href}
                className="uppercase tracking-widest transition-colors text-slate-600 hover:text-cyan-600"
              >
                {label}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
}
