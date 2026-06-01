"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Props = (
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
) & { className?: string };

export function LiquidButton({ className, children, ...props }: Props) {
  const base = cn(
    "relative inline-flex items-center justify-center cursor-pointer gap-2",
    "px-5 py-2.5 text-sm font-medium text-white",
    "hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200",
    className,
  );

  const internals = (
    <>
      {/* Glass bevel */}
      <div
        className="absolute inset-0 z-0"
        style={{
          boxShadow: [
            "inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09)",
            "inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85)",
            "inset 1px 1px 1px -0.5px rgba(255,255,255,0.6)",
            "inset -1px -1px 1px -0.5px rgba(255,255,255,0.6)",
            "inset 0 0 6px 6px rgba(255,255,255,0.12)",
            "inset 0 0 2px 2px rgba(255,255,255,0.06)",
            "0 0 12px rgba(0,0,0,0.15)",
          ].join(","),
        }}
      />
      {/* Backdrop distort */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        style={{ backdropFilter: 'url("#liquid-glass-filter") blur(1px)' }}
      />
      {/* Background tint */}
      <div className="absolute inset-0 bg-[#455dd3]/70 z-0" />
      {/* Content */}
      <span className="relative z-10">{children}</span>
      <GlassFilter />
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return <a href={href} className={base} {...rest}>{internals}</a>;
  }

  return (
    <button className={base} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {internals}
    </button>
  );
}

function GlassFilter() {
  return (
    <svg className="hidden absolute" aria-hidden>
      <defs>
        <filter id="liquid-glass-filter" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.065 0.065" numOctaves="1" seed="2" result="turbulence" />
          <feGaussianBlur in="turbulence" stdDeviation="1.5" result="blurredNoise" />
          <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="40" xChannelSelector="R" yChannelSelector="B" result="displaced" />
          <feGaussianBlur in="displaced" stdDeviation="2.5" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
