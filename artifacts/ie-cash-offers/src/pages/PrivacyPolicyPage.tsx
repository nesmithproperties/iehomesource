import { Link } from "wouter";
import { Building2, PhoneCall, ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  const updated = "April 1, 2025";

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-8 w-8 text-cyan-600" />
            <span className="font-serif font-black text-2xl tracking-tighter text-slate-900 uppercase">
              Inland Empire Home Source
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <Link href="/" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Home</Link>
            <Link href="/cities" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Cities</Link>
            <Link href="/blog" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Blog</Link>
            <Link href="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors uppercase tracking-widest">Contact Us</Link>
            <a href="tel:9092026006" className="flex items-center gap-2 bg-cyan-600 text-white px-6 py-2.5 rounded-full font-black hover:shadow-xl transition-all">
              <PhoneCall className="h-4 w-4" /> (909) 202-6006
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-36 pb-12 bg-slate-950 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 text-[11px] font-black uppercase tracking-widest mb-6">
            <ShieldCheck className="h-3.5 w-3.5" /> Legal
          </div>
          <h1 className="text-5xl font-serif font-black tracking-tighter mb-4 uppercase">
            Privacy <span className="text-cyan-400">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium">Last updated: {updated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 prose prose-slate prose-headings:font-serif prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight max-w-none">

          <div className="space-y-10 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">1. Introduction</h2>
              <p>
                Inland Empire Home Source ("we," "us," or "our") operates this website to provide information about our cash home buying services in the Inland Empire region of California. This Privacy Policy explains how we collect, use, and protect information you share with us when visiting <strong>iehomesource.com</strong> or contacting us directly.
              </p>
              <p className="mt-3">
                By using our website or contacting us, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Contact information</strong> — name, phone number, and email address when you call or submit a form.</li>
                <li><strong>Property information</strong> — address, condition, and other details about your property that you voluntarily share with us.</li>
                <li><strong>Usage data</strong> — standard web log data such as IP address, browser type, pages visited, and time spent on the site, collected automatically.</li>
              </ul>
              <p className="mt-3">We do not collect payment information through this website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Contact you to discuss your property and make a cash offer.</li>
                <li>Respond to your inquiries promptly.</li>
                <li>Improve our website and services.</li>
                <li>Comply with legal obligations.</li>
              </ul>
              <p className="mt-3">We do not use your information for advertising or marketing purposes beyond following up on your direct inquiry.</p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong>Service providers</strong> — trusted partners who assist in operating our website or conducting our business (e.g., form processing tools), under strict confidentiality agreements.</li>
                <li><strong>Legal requirements</strong> — when required by law, court order, or government authority.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">5. Cookies & Tracking</h2>
              <p>
                Our website may use cookies — small files stored on your device — to improve your browsing experience and understand how visitors use our site. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. Some features of our site may not function properly if cookies are disabled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">6. Data Security</h2>
              <p>
                We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">8. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us so we can delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">9. Your California Privacy Rights</h2>
              <p>
                Under the California Consumer Privacy Act (CCPA), California residents have the right to request disclosure of the personal information we collect, request deletion of their personal information, and opt out of the sale of personal information. We do not sell personal information. To exercise your rights, contact us at <strong>(909) 202-6006</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif font-black uppercase tracking-tight text-slate-900 mb-3">11. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="mt-4 bg-slate-50 border border-slate-200 rounded-xl p-6">
                <p className="font-black text-slate-900 text-lg mb-1">Inland Empire Home Source</p>
                <p className="text-slate-600">Inland Empire, California</p>
                <a href="tel:9092026006" className="inline-flex items-center gap-2 mt-3 text-cyan-600 font-black hover:underline">
                  <PhoneCall className="h-4 w-4" /> (909) 202-6006
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 text-center border-t border-white/10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4">
          <span className="font-serif font-black text-xl tracking-tighter text-white uppercase">Inland Empire Home Source</span>
        </Link>
        <div className="flex justify-center gap-6 text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
        <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Inland Empire Home Source • All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
