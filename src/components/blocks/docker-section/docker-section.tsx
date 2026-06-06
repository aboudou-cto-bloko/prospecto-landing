"use client";

import { useState } from "react";

const CMDS = {
  linux: "curl -fsSL https://aboudouzinsou.com/install.sh | bash",
  windows: "irm https://aboudouzinsou.com/install.ps1 | iex",
};

const OS_LABELS = {
  linux: "Linux / Mac",
  windows: "Windows",
};

type OS = keyof typeof CMDS;

export default function DockerSection() {
  const [os, setOs] = useState<OS>("linux");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CMDS[os]);
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

        {/* OS tabs */}
        <div className="flex gap-1 bg-[#111110] border border-white/8 rounded-lg p-1 mb-3">
          {(Object.keys(CMDS) as OS[]).map((key) => (
            <button
              key={key}
              onClick={() => { setOs(key); setCopied(false); }}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium transition-all"
              style={{
                background: os === key ? "#1e1e1d" : "transparent",
                color: os === key ? "#ffffff" : "#71717a",
                border: os === key ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
              }}
            >
              {key === "linux" ? (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.567 1.563 1.182 2.114.623.553 1.384.904 2.16 1.132.767.226 1.548.321 2.275.385 1.537.135 2.83.047 2.83.047s.032.074.032.182c0 .115-.015.253-.04.337a3.64 3.64 0 0 1-1.323 1.878c-.51.378-1.05.576-1.495.693-.445.119-.777.145-.777.145l.026.186s.338-.026.84-.164c.5-.137 1.156-.37 1.75-.795.59-.42 1.143-1.087 1.361-2.037.14-.614.127-1.133.047-1.56a5.48 5.48 0 0 1 1.614.116c.517.1.963.286 1.265.511.302.222.455.471.455.726 0 .148-.038.303-.117.469l.168.073c.098-.197.15-.406.15-.619 0-.37-.193-.713-.567-.992-.37-.276-.896-.478-1.47-.587a6.208 6.208 0 0 0-1.715-.113c-.075-.385-.22-.77-.44-1.105a2.77 2.77 0 0 0-1.08-.923c.46-.116.879-.3 1.236-.586.613-.492.977-1.25.977-2.116V8.57c0-.44.094-.84.297-1.12.204-.283.533-.459.978-.459h.013c.445 0 .773.176.977.459.203.28.297.68.297 1.12v1.05c0 .875.366 1.633.978 2.125.36.29.783.475 1.243.592-.39.205-.73.506-.99.906-.218.338-.363.72-.44 1.105a6.188 6.188 0 0 0-1.714.113c-.574.11-1.099.31-1.47.588-.373.278-.567.62-.567.991 0 .21.052.422.15.619l.168-.073c-.079-.166-.117-.321-.117-.469 0-.255.153-.504.455-.726.302-.225.748-.41 1.265-.511.52-.1 1.085-.133 1.614-.116-.08.427-.093.946.047 1.56.218.95.771 1.617 1.361 2.037.594.425 1.25.658 1.75.795.502.138.84.164.84.164l.026-.186s-.332-.026-.777-.145c-.445-.117-.985-.315-1.495-.693a3.64 3.64 0 0 1-1.323-1.878 1.73 1.73 0 0 1-.04-.337c0-.108.032-.182.032-.182s1.293.088 2.83-.047c.727-.064 1.508-.16 2.275-.385.776-.228 1.537-.579 2.16-1.132.615-.551 1.065-1.335 1.182-2.114.123-.805-.009-1.657-.287-2.49-.589-1.77-1.831-3.47-2.716-4.52-.75-1.067-.974-1.928-1.05-3.02-.064-1.491 1.057-5.965-3.17-6.298A6.73 6.73 0 0 0 12.504 0z"/>
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.551H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
              )}
              {OS_LABELS[key]}
            </button>
          ))}
        </div>

        {/* Command box */}
        <div className="bg-[#191918] border border-white/8 rounded-lg px-4 py-3 flex items-center gap-3 w-full max-w-lg">
          <svg className="w-4 h-4 text-[#71717a] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3" />
          </svg>
          <code className="font-mono text-[12px] text-[#71717a] flex-1 select-all truncate">
            {CMDS[os]}
          </code>
          <button
            onClick={copy}
            className="text-[#71717a] hover:text-[#bac3ff] transition-colors opacity-60 hover:opacity-100 shrink-0"
            title="Copier"
          >
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

        <p className="text-[11px] text-[#71717a]/50 mt-3">
          {os === "linux"
            ? "Requiert Docker · Compatible Ubuntu, Debian, Arch, macOS"
            : "Requiert Docker Desktop · PowerShell 5.1+ (Windows 10/11)"}
        </p>
      </div>
    </section>
  );
}
