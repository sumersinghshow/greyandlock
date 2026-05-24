import React from "react";

type BadgeType =
  | "PUBLIC"
  | "ANALYST VERIFIED"
  | "STRATEGIC ALERT"
  | "HIGH CONFIDENCE"
  | "LOW CONFIDENCE"
  | "CRITICAL ESCALATION"
  | "WARNING";

interface ThreatBadgeProps {
  status: BadgeType | string;
  className?: string;
}

export default function ThreatBadge({ status, className = "" }: ThreatBadgeProps) {
  const getStyles = (val: string) => {
    switch (val.toUpperCase()) {
      case "PUBLIC":
        return {
          border: "border-white/20",
          bg: "bg-white/5",
          text: "text-text-secondary",
          dot: "bg-text-secondary",
        };
      case "ANALYST VERIFIED":
        return {
          border: "border-success/30",
          bg: "bg-success/5",
          text: "text-success",
          dot: "bg-success animate-pulse",
        };
      case "STRATEGIC ALERT":
      case "HIGH CONFIDENCE":
        return {
          border: "border-gold-accent/40",
          bg: "bg-gold-accent/5",
          text: "text-gold-accent",
          dot: "bg-gold-accent animate-pulse-slow",
        };
      case "LOW CONFIDENCE":
        return {
          border: "border-blue-500/20",
          bg: "bg-blue-500/5",
          text: "text-blue-400",
          dot: "bg-blue-400",
        };
      case "CRITICAL ESCALATION":
      case "DANGER":
        return {
          border: "border-danger/40",
          bg: "bg-danger/5",
          text: "text-danger terminal-glow-red",
          dot: "bg-danger animate-ping",
        };
      case "WARNING":
        return {
          border: "border-warning/30",
          bg: "bg-warning/5",
          text: "text-warning",
          dot: "bg-warning animate-pulse",
        };
      default:
        return {
          border: "border-white/10",
          bg: "bg-white/5",
          text: "text-text-secondary",
          dot: "bg-text-secondary",
        };
    }
  };

  const style = getStyles(status);

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border font-mono text-[9px] uppercase tracking-widest rounded-sm ${style.border} ${style.bg} ${style.text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`}></span>
      <span>{status}</span>
    </span>
  );
}
