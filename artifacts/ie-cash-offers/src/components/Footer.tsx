import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10 text-center border-t border-white/10">
      <Link href="/" className="inline-block mb-4">
        <span className="font-serif font-black text-xl tracking-tighter text-white uppercase">
          Inland Empire Home Source
        </span>
      </Link>
      <div className="flex justify-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
        <Link href="/privacy-policy" className="hover:text-white transition-colors">
          Privacy Policy
        </Link>
        <Link href="/blog" className="hover:text-white transition-colors">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-white transition-colors">
          Contact
        </Link>
      </div>
      <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
        © {new Date().getFullYear()} Inland Empire Home Source · All Rights Reserved
      </p>
    </footer>
  );
}
