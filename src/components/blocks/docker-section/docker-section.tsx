"use client";

import { useState } from "react";

const INSTALL_CMD = "curl -fsSL https://aboudouzinsou.com/install.sh | bash";

export default function DockerSection() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center fade-up">
        <h2
          className="text-[40px] md:text-[56px] font-bold leading-[1.05] text-white mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Votre prochain client est déjà<br />dans votre téléphone.
        </h2>
        <p className="text-[15px] text-[#71717a] mb-10 max-w-md">
          Il attend juste le bon message.
        </p>
        <a
          href="#acheter"
          className="bg-[#455dd3] text-white px-10 py-4 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity mb-12 text-base"
        >
          Commencer maintenant
        </a>
        <div className="bg-[#191918] border border-white/8 rounded-lg px-4 py-3 flex items-center gap-3 w-full max-w-lg">
          <svg className="w-4 h-4 text-[#71717a] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3" />
          </svg>
          <code className="font-mono text-[12px] text-[#71717a] flex-1 select-all truncate">{INSTALL_CMD}</code>
          <button onClick={copy} className="text-[#71717a] hover:text-[#bac3ff] transition-colors opacity-60 hover:opacity-100" title="Copier">
            {copied ? (
              <svg className="w-4 h-4" style={{ color: "#22c55e" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
