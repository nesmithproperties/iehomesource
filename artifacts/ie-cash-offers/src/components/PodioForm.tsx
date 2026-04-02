import { useEffect, useRef } from "react";

export default function PodioForm() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const existing = document.querySelector('script[src*="2604476"]');
    if (existing) {
      if (typeof (window as any)._podioWebForm !== "undefined") {
        (window as any)._podioWebForm.render("2604476");
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://podio.com/webforms/30692898/2604476.js";
    script.onload = () => {
      const inline = document.createElement("script");
      inline.textContent = '_podioWebForm.render("2604476")';
      document.body.appendChild(inline);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full bg-white min-h-[420px] p-4">
      <div className="podio-webform-container" />
    </div>
  );
}
