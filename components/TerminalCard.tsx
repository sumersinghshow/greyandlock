import React from "react";

interface TerminalCardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  className?: string;
  glow?: boolean;
  classification?: string;
}

export default function TerminalCard({
  children,
  title,
  subtitle,
  className = "",
  glow = false,
  classification,
}: TerminalCardProps) {
  return (
    <div
      className={`glass-panel ${
        glow ? "glass-panel-glow" : ""
      } rounded-sm relative p-5 transition-all duration-300 border border-gold-accent/10 hover:border-gold-accent/25 ${className}`}
    >
      {/* Corner Bracket Details */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-accent/40"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-accent/40"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-accent/40"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-accent/40"></div>

      {/* Grid crosshair details for enterprise military look */}
      <span className="absolute -top-1 -left-1 font-mono text-[6px] text-gold-accent/30">+</span>
      <span className="absolute -top-1 -right-1 font-mono text-[6px] text-gold-accent/30">+</span>
      <span className="absolute -bottom-1.5 -left-1 font-mono text-[6px] text-gold-accent/30">+</span>
      <span className="absolute -bottom-1.5 -right-1 font-mono text-[6px] text-gold-accent/30">+</span>

      {/* Header Bar */}
      {(title || subtitle || classification) && (
        <div className="border-b border-gold-accent/10 pb-3 mb-4 flex items-center justify-between font-mono">
          <div className="flex flex-col gap-0.5">
            {title && (
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-primary flex items-center gap-2">
                <span className="inline-block w-1.5 h-2.5 bg-gold-accent"></span>
                {title}
              </h3>
            )}
            {subtitle && (
              <span className="text-[9px] uppercase tracking-wider text-text-secondary">
                {subtitle}
              </span>
            )}
          </div>
          {classification && (
            <span className="px-1.5 py-0.5 bg-gold-accent/5 border border-gold-accent/20 text-[8px] text-gold-accent font-semibold tracking-widest uppercase">
              {classification}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
