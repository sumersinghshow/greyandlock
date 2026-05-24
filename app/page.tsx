"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Shield, Globe, ShieldAlert, Cpu, CheckCircle, ArrowRight, Rss, ArrowUpRight } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import ThreatBadge from "@/components/ThreatBadge";

interface Pillar {
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
}

interface ReportMock {
  title: string;
  date: string;
  risk: string;
  category: string;
  excerpt: string;
  confidence: string;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const pillars: Pillar[] = [
    {
      icon: <Globe className="h-6 w-6 text-gold-accent" />,
      title: "Geopolitical Risk",
      desc: "Deep-dives into border disputes, trade restrictions, and resource competition.",
      points: [
        "Sovereign conflict modeling matrices",
        "Frontier transit infrastructure audits",
        "Bilateral defense treaty escalation monitors",
      ],
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-gold-accent" />,
      title: "Information Warfare",
      desc: "Monitoring narrative manipulation, automated bot networks, and cognitive influence campaigns.",
      points: [
        "State-aligned social network analytics",
        "Deepfake propagation identification grids",
        "Cognitive threat timeline assessments",
      ],
    },
    {
      icon: <Cpu className="h-6 w-6 text-gold-accent" />,
      title: "Cyber Security & Technology",
      desc: "Auditing advanced threat networks (APTs) targeting transport corridors and trade grids.",
      points: [
        "Satellite communications link scans",
        "Bilateral digital chokepoint security audits",
        "Dual-use industrial tech controls tracking",
      ],
    },
  ];

  const reports: ReportMock[] = [
    {
      title: "India Strategic Risk Outlook 2026",
      date: "MAY 24, 2026",
      risk: "48%",
      category: "Geopolitics / South Asia",
      excerpt: "Evaluating northern border positioning, critical mineral trade accords, and deepwater naval infrastructure planning.",
      confidence: "HIGH CONFIDENCE",
    },
    {
      title: "China Influence Operations Assessment",
      date: "MAY 19, 2026",
      risk: "82%",
      category: "InfoWar / Global Focus",
      excerpt: "Deep analysis of cognitive domain operations, narrative tracking, and coordinated public sentiment manipulation.",
      confidence: "ANALYST VERIFIED",
    },
    {
      title: "South Asia Security Brief",
      date: "MAY 15, 2026",
      risk: "76%",
      category: "Security / Regional stability",
      excerpt: "Active monitoring of deepwater ports, ocean trade channels, and maritime GPS transponder spoofing activity.",
      confidence: "STRATEGIC ALERT",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 military-grid pointer-events-none opacity-80"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg-primary/20 to-bg-primary pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Classification Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-accent/10 border border-gold-accent/30 rounded-sm font-mono text-[10px] text-gold-accent uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-accent animate-ping"></span>
                SYSTEM ACTIVE: REAL-TIME GLOBAL MONITORS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display uppercase tracking-tight text-text-primary leading-[1.1]">
                Actionable <br />
                <span className="text-gold-accent">
                  Geopolitical Intelligence
                </span> <br />
                for Decision Makers
              </h1>
              
              <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
                Monitor geopolitical risks, influence operations, conflict escalation, and strategic developments through a unified intelligence platform. Designed for global corporations, policy hubs, and intelligence professionals.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/platform"
                  className="px-8 py-3.5 bg-gold-accent text-bg-primary text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                >
                  <span>Explore Terminal</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border border-gold-accent/20 text-text-primary text-xs font-bold uppercase tracking-widest hover:border-gold-accent hover:text-gold-accent transition-all duration-300 rounded-sm flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm"
                >
                  <span>Request Briefing</span>
                </Link>
              </div>

              {/* Metric Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-gold-accent/10 font-mono">
                <div>
                  <span className="text-2xl font-bold text-text-primary block terminal-glow-gold">47</span>
                  <span className="text-[9px] uppercase tracking-wider text-text-secondary">Active Risk Signals</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-text-primary block terminal-glow-gold">12</span>
                  <span className="text-[9px] uppercase tracking-wider text-text-secondary">Conflict Zones</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-text-primary block terminal-glow-gold">24</span>
                  <span className="text-[9px] uppercase tracking-wider text-text-secondary">Countries Tracked</span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-text-primary block terminal-glow-gold">100+</span>
                  <span className="text-[9px] uppercase tracking-wider text-text-secondary">Reports Published</span>
                </div>
              </div>

            </div>

            {/* Hero Right: Animated SVG Threat Map Widget */}
            <div className="lg:col-span-5 relative">
              <div className="glass-panel border border-gold-accent/15 rounded-sm p-4 space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.15)] relative">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center border-b border-gold-accent/10 pb-3 font-mono text-[9px]">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-danger animate-pulse"></span>
                    <span className="text-text-primary font-bold">REGION SCANS: INDIAN OCEAN BASIN</span>
                  </div>
                  <span className="px-1.5 py-0.5 bg-success/15 border border-success/30 text-success text-[7.5px] rounded-sm">SYS OK</span>
                </div>

                {/* Vector scanning overlay graphic */}
                <div className="h-64 bg-bg-secondary/40 border border-gold-accent/5 rounded-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 radar-dots opacity-40"></div>
                  
                  {/* Outer sweeping radar ring */}
                  <div className="h-48 w-48 border border-gold-accent/15 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border border-gold-accent/5 rounded-full scale-75"></div>
                    <div className="absolute inset-0 border border-gold-accent/5 rounded-full scale-50"></div>
                    
                    {/* Pulsing focal nodes */}
                    <div className="absolute top-1/3 left-1/4 h-3 w-3 rounded-full border border-danger/60 bg-danger/20 flex items-center justify-center">
                      <span className="h-1.5 w-1.5 rounded-full bg-danger"></span>
                    </div>

                    <div className="absolute bottom-1/3 right-1/3 h-4 w-4 rounded-full border border-success/60 bg-success/20 flex items-center justify-center">
                      <span className="h-2 w-2 rounded-full bg-success"></span>
                    </div>

                    {/* Sweep hand */}
                    <div className="absolute top-1/2 left-1/2 w-24 h-[1.5px] bg-gradient-to-r from-gold-accent to-transparent origin-left rotate-45 animate-radar-pulse"></div>
                  </div>

                  <span className="absolute bottom-2 right-2 font-mono text-[7px] text-text-secondary/70">REF: TR-89</span>
                </div>

                {/* Telemetry Output */}
                <div className="font-mono text-[8.5px] text-text-secondary space-y-1.5 border-t border-gold-accent/10 pt-3">
                  <div className="flex justify-between">
                    <span>&gt; INTERCEPTED_COMM: 92.4 MHz</span>
                    <span className="text-gold-accent font-bold">14s AGO</span>
                  </div>
                  <p className="bg-bg-primary/60 p-2 border border-gold-accent/5 rounded-sm text-[8px] leading-relaxed text-text-primary">
                    SIGINT: Unexpected maritime frequency spike recorded near Arabian Sea shipping corridors. Signals are consistent with naval transport telemetry adjustments.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORPORATE TRUST LOGOS */}
      <section className="border-y border-gold-accent/10 bg-bg-secondary/20 py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="font-mono text-[8.5px] uppercase tracking-widest text-text-secondary block">
            INTELLIGENCE NETWORKS & TRUSTED ENTERPRISES
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-text-secondary/60 font-mono text-xs uppercase tracking-widest font-bold">
            <div className="border border-gold-accent/5 bg-bg-secondary/35 py-3 px-4 rounded-sm flex items-center justify-center gap-1.5 hover:text-text-primary transition-colors">
              <Shield className="h-3.5 w-3.5 text-gold-accent/50" />
              <span>SOVEREIGN FUND DEFENSE</span>
            </div>
            <div className="border border-gold-accent/5 bg-bg-secondary/35 py-3 px-4 rounded-sm flex items-center justify-center gap-1.5 hover:text-text-primary transition-colors">
              <Globe className="h-3.5 w-3.5 text-gold-accent/50" />
              <span>GLOBAL MINERAL CORP</span>
            </div>
            <div className="border border-gold-accent/5 bg-bg-secondary/35 py-3 px-4 rounded-sm flex items-center justify-center gap-1.5 hover:text-text-primary transition-colors">
              <ShieldAlert className="h-3.5 w-3.5 text-gold-accent/50" />
              <span>INDO-PACIFIC ADVISORY</span>
            </div>
            <div className="border border-gold-accent/5 bg-bg-secondary/35 py-3 px-4 rounded-sm flex items-center justify-center gap-1.5 hover:text-text-primary transition-colors">
              <Cpu className="h-3.5 w-3.5 text-gold-accent/50" />
              <span>STRATEGIC LOGISTICS INTEL</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTELLIGENCE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
            CORE DOMAINS OF CAPABILITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display text-text-primary">
            Comprehensive Geopolitical Coverage
          </h2>
          <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed">
            We map risk coefficients across physical, cyber, and cognitive layers to supply a continuous, integrated strategic monitoring pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <TerminalCard key={idx} subtitle={`CORE DOMAIN ${idx + 1}`} title={p.title} classification="SECURE INDEX">
              <div className="space-y-4">
                <div className="h-10 w-10 bg-gold-accent/5 border border-gold-accent/25 rounded-sm flex items-center justify-center">
                  {p.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {p.desc}
                  </p>
                  <ul className="space-y-1.5 pt-2">
                    {p.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-[10px] font-mono text-text-primary flex items-center gap-2">
                        <span className="h-1 w-1 bg-gold-accent rounded-full flex-shrink-0"></span>
                        <span className="truncate">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TerminalCard>
          ))}
        </div>
      </section>

      {/* 4. PLATFORM HUD / PREVIEW MATRIX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
            GREY LOCK COMMAND INTERFACE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display text-text-primary">
            Platform Experience
          </h2>
          <p className="text-xs text-text-secondary max-w-xl mx-auto leading-relaxed">
            Preview our operational console: built with data density, real-time alert filters, and comprehensive country monitors modeled on defense architectures.
          </p>
        </div>

        {/* Dashboard Preview Hud */}
        <div className="glass-panel border border-gold-accent/15 rounded-sm p-5 font-mono text-[10px] space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Top HUD Specs */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold-accent/10 pb-4 gap-3">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 bg-gold-accent/10 border border-gold-accent/30 rounded-sm flex items-center justify-center text-gold-accent">
                <Shield className="h-4 w-4" />
              </div>
              <div>
                <span className="text-text-primary font-bold uppercase block tracking-wider text-[10.5px]">
                  GREY LOCK INTEL TERMINAL
                </span>
                <span className="text-[7.5px] text-text-secondary block mt-0.5">
                  STATUS: ONLINE // SECURITY PORT: GL_IN_829 // DATA CONFIDENCE: 98%
                </span>
              </div>
            </div>

            {/* Quick Metrics bar */}
            <div className="flex flex-wrap gap-4 text-[9px] text-text-secondary">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-danger animate-pulse"></span>
                <span className="text-text-primary font-bold">8 ACTIVE HOT SPOTS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-warning"></span>
                <span className="text-text-primary font-bold">4 NARRATIVE OUTBREAKS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-success"></span>
                <span className="text-text-primary font-bold">98.4% STABLE</span>
              </div>
            </div>
          </div>

          {/* Grid Layout inside console mock */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Table: Country Threat Assessments */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex justify-between items-center text-[9px] text-text-secondary uppercase">
                <span>Active Country Threat Assessments</span>
                <span>Sorted by Risk Index</span>
              </div>
              <div className="overflow-x-auto border border-gold-accent/10 rounded-sm">
                <table className="w-full text-left min-w-[400px]">
                  <thead>
                    <tr className="bg-bg-secondary/40 text-text-secondary border-b border-gold-accent/10 uppercase text-[8.5px]">
                      <th className="py-2.5 px-3">Country</th>
                      <th className="py-2.5 px-3">Risk Coefficient</th>
                      <th className="py-2.5 px-3">Trend</th>
                      <th className="py-2.5 px-3">Current Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gold-accent/5 hover:bg-bg-secondary/20 transition-colors">
                      <td className="py-2.5 px-3 text-text-primary font-bold">China</td>
                      <td className="py-2.5 px-3 text-danger font-bold">82%</td>
                      <td className="py-2.5 px-3 text-danger font-semibold">▲ ESCALATING</td>
                      <td className="py-2.5 px-3 text-text-secondary text-[9px]">INFO OPERATIONS / MARITIME POSTURE</td>
                    </tr>
                    <tr className="border-b border-gold-accent/5 hover:bg-bg-secondary/20 transition-colors">
                      <td className="py-2.5 px-3 text-text-primary font-bold">Russia</td>
                      <td className="py-2.5 px-3 text-danger font-bold">88%</td>
                      <td className="py-2.5 px-3 text-text-secondary font-semibold">■ STABLE</td>
                      <td className="py-2.5 px-3 text-text-secondary text-[9px]">COGNITIVE CAMPAIGN / INTRUSION</td>
                    </tr>
                    <tr className="border-b border-gold-accent/5 hover:bg-bg-secondary/20 transition-colors">
                      <td className="py-2.5 px-3 text-text-primary font-bold">Iran</td>
                      <td className="py-2.5 px-3 text-warning font-bold">78%</td>
                      <td className="py-2.5 px-3 text-danger font-semibold">▲ ESCALATING</td>
                      <td className="py-2.5 px-3 text-text-secondary text-[9px]">ELECTRONIC WARFARE / STRAIT JAMMING</td>
                    </tr>
                    <tr className="border-b border-gold-accent/5 hover:bg-bg-secondary/20 transition-colors">
                      <td className="py-2.5 px-3 text-text-primary font-bold">Pakistan</td>
                      <td className="py-2.5 px-3 text-warning font-bold">76%</td>
                      <td className="py-2.5 px-3 text-danger font-semibold">▲ ESCALATING</td>
                      <td className="py-2.5 px-3 text-text-secondary text-[9px]">PARAMILITARY SCAN / BORDER TENSION</td>
                    </tr>
                    <tr className="hover:bg-bg-secondary/20 transition-colors">
                      <td className="py-2.5 px-3 text-text-primary font-bold">India</td>
                      <td className="py-2.5 px-3 text-success font-bold">48%</td>
                      <td className="py-2.5 px-3 text-text-secondary font-semibold">■ STABLE</td>
                      <td className="py-2.5 px-3 text-text-secondary text-[9px]">OSINT FOCUS / INFRASTRUCTURE SECURITY</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Live Signals feed sidebar inside mock */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-[9px] text-text-secondary uppercase block">
                &gt; LIVE INTELLIGENCE FEEDS
              </span>
              
              <div className="bg-bg-primary/50 border border-gold-accent/10 rounded-sm p-3.5 space-y-3 h-[180px] overflow-y-auto">
                <div className="border-l border-danger pl-2 space-y-0.5">
                  <span className="text-danger font-bold text-[7.5px]">STRATEGIC ALERT // 2m AGO</span>
                  <p className="text-[10px] text-text-primary">GPS Spoofing frequency spike reported near Arabian Sea lanes.</p>
                </div>
                
                <div className="border-l border-warning pl-2 space-y-0.5">
                  <span className="text-warning font-bold text-[7.5px]">NARRATIVE DETECTED // 12m AGO</span>
                  <p className="text-[10px] text-text-primary">Coordinated state-aligned proxy network targeting trade agreements.</p>
                </div>

                <div className="border-l border-gold-accent/40 pl-2 space-y-0.5">
                  <span className="text-text-secondary font-semibold text-[7.5px]">SPECTRAL SCAN // 48m AGO</span>
                  <p className="text-[10px] text-text-primary">Digital infrastructure scans verified for central trade portals.</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA connecting to console */}
          <div className="border-t border-gold-accent/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-text-secondary text-[8.5px]">
              // CLIENT AUTHORIZATION LEVEL: DEMO PUBLIC VIEW
            </span>
            <Link
              href="/platform"
              className="px-4 py-2 border border-gold-accent text-gold-accent text-[9.5px] uppercase tracking-widest font-bold hover:bg-gold-accent hover:text-bg-primary transition-all duration-300 rounded-sm flex items-center gap-1.5"
            >
              <span>ACCESS LIVE INTELLIGENCE TERMINAL</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. LATEST INTELLIGENCE REPORTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-gold-accent/10 pb-6">
          <div className="space-y-3">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
              INSTITUTIONAL RESEARCH BRIEFS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-display text-text-primary">
              Latest Geopolitical Forecasts
            </h2>
          </div>
          <Link
            href="/reports"
            className="text-xs font-bold uppercase font-mono tracking-widest text-gold-accent hover:text-text-primary transition-colors flex items-center gap-1.5"
          >
            <span>ACCESS REPORT LIBRARIES</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reports.map((rep, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between border border-gold-accent/10 bg-bg-secondary/20 rounded-sm p-5 hover:border-gold-accent/30 transition-all relative group"
            >
              <div className="space-y-4">
                
                {/* Header info */}
                <div className="flex justify-between items-start font-mono text-[8px]">
                  <span className="px-2 py-0.5 bg-bg-primary border border-gold-accent/15 text-text-secondary tracking-wider uppercase rounded-sm">
                    {rep.category}
                  </span>
                  <ThreatBadge status={rep.confidence} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-md font-bold uppercase tracking-wider text-text-primary group-hover:text-gold-accent transition-colors font-display">
                    {rep.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {rep.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom detail row */}
              <div className="border-t border-gold-accent/10 pt-3 mt-4 flex items-center justify-between font-mono text-[9px] text-text-secondary">
                <span>{rep.date}</span>
                <div className="flex items-center gap-1">
                  <span>RISK:</span>
                  <span className="text-danger font-bold text-xs">{rep.risk}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 6. NEWSLETTER SUBSCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        <div className="glass-panel border border-gold-accent/15 rounded-sm p-8 text-center space-y-6 shadow-xl relative overflow-hidden">
          
          {/* Cyber Brackets */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-accent/40"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-accent/40"></div>
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-accent/40"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-accent/40"></div>

          <div className="max-w-md mx-auto space-y-3">
            <Rss className="h-6 w-6 text-gold-accent mx-auto" />
            <h2 className="text-2xl font-extrabold uppercase font-display text-text-primary">
              Subscribe to Strategic Briefings
            </h2>
            <p className="text-xs text-text-secondary leading-relaxed">
              Sign up to receive our weekly open-source intelligence summary, narrative tracking assessments, and regional security bulletins directly in your mailbox. 100% confidential.
            </p>
          </div>

          {subscribed ? (
            <div className="max-w-sm mx-auto p-4 bg-success/5 border border-success/30 rounded-sm font-mono text-[10.5px] text-success flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>EMAIL REGISTERED WITH SECURE LOG PIPELINE.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER SECURE EMAIL..."
                className="flex-grow px-4 py-2.5 bg-bg-primary/80 border border-gold-accent/15 text-text-primary placeholder:text-text-secondary/50 font-mono text-xs focus:outline-none focus:border-gold-accent transition-colors rounded-sm"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-gold-accent text-bg-primary text-xs font-bold uppercase tracking-widest font-mono hover:bg-white transition-colors rounded-sm shadow-[0_0_10px_rgba(212,175,55,0.2)]"
              >
                SUBSCRIBE
              </button>
            </form>
          )}

          <span className="font-mono text-[7.5px] text-text-secondary/50 block">
            // METADATA CONTROL: NO SUBPOENAS OR PUBLIC ARCHIVES APPLIED
          </span>

        </div>
      </section>

    </div>
  );
}
