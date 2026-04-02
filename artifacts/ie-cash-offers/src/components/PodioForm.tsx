import { useEffect, useRef } from "react";

export default function PodioForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    if (scriptRef.current) return;

    const script = document.createElement("script");
    script.src = "https://podio.com/webforms/30692898/2604476.js";
    script.async = true;
    script.onload = () => {
      if (typeof (window as any)._podioWebForm !== "undefined") {
        (window as any)._podioWebForm.render("2604476");
      }
    };
    document.body.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[400px] p-4 bg-white" />
  );
}
