import { ExternalLink, PhoneCall } from "lucide-react";

const PODIO_FORM_URL = "https://podio.com/webforms/30692898/2604476";
const PHONE = "(909) 202-6006";

export default function PodioForm() {
  return (
    <div className="w-full bg-white p-6 flex flex-col gap-5">
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-1">Get Your Fair Cash Offer</h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          No obligations, no fees, no repairs needed. Tell us about your property and we'll get back to you within 24 hours.
        </p>
      </div>

      <ul className="flex flex-col gap-2 text-sm text-slate-600">
        {[
          "100% free — no agent commissions",
          "Close on your preferred date",
          "We buy as-is, any condition",
          "No cleaning or repairs required",
        ].map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="text-cyan-600 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <a
        href={PODIO_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-6 rounded-xl text-base transition-colors shadow-md"
      >
        <ExternalLink className="h-5 w-5" />
        Fill Out Our Offer Form
      </a>

      <div className="border-t border-slate-100 pt-4 text-center">
        <p className="text-xs text-slate-400 mb-2">Prefer to talk? Call us directly:</p>
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="flex items-center justify-center gap-2 text-slate-700 font-bold text-lg hover:text-cyan-600 transition-colors"
        >
          <PhoneCall className="h-5 w-5 text-cyan-600" />
          {PHONE}
        </a>
      </div>
    </div>
  );
}
