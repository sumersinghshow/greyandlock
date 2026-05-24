"use client";

import React from "react";
import { Shield, Eye, CheckSquare, Target, GitBranch, Terminal } from "lucide-react";
import TerminalCard from "@/components/TerminalCard";
import ThreatBadge from "@/components/ThreatBadge";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  clearance: string;
  imageIcon: React.ReactNode;
}

export default function About() {
  const coreStandards = [
    {
      icon: <Eye className="h-5 w-5 text-gold-accent" />,
      title: "Open Source Intelligence (OSINT)",
      desc: "We leverage exclusively public databases, commercial satellite imagery, digital radio transponders, narrative metadata, and online feeds. No espionage, fully auditable citations.",
    },
    {
      icon: <CheckSquare className="h-5 w-5 text-gold-accent" />,
      title: "Methodological Rigor",
      desc: "Every assessment undergoes systematic cross-verification. We apply standardized intelligence analytic techniques (ACH - Analysis of Competing Hypotheses) to eliminate cognitive bias.",
    },
    {
      icon: <Target className="h-5 w-5 text-gold-accent" />,
      title: "Predictive Focus",
      desc: "We go beyond recounting past events. Our analysis is structured around warning signals, escalation indicators, and forward-looking strategic forecasts.",
    },
  ];

  const team: TeamMember[] = [
    {
      name: "Dr. Aris Sen",
      role: "Director of Research & South Asia Lead",
      specialty: "Northern border security & supply chain geopolitics",
      bio: "Former sovereign policy adviser with 15+ years evaluating Indo-Pacific maritime chokepoints and supply-chain dependencies.",
      clearance: "ANALYST VERIFIED",
      imageIcon: <Shield className="h-8 w-8 text-gold-accent" />,
    },
    {
      name: "Christopher Vance",
      role: "Information Warfare Domain Lead",
      specialty: "Cognitive domain operations & botnet tracking",
      bio: "Formerly with national cyber command operations. Expert in identifying coordinated narrative manipulation and digital asset security.",
      clearance: "HIGH CONFIDENCE",
      imageIcon: <Terminal className="h-8 w-8 text-gold-accent" />,
    },
    {
      name: "Capt. Marcus Ross (Ret.)",
      role: "Maritime Security Specialist",
      specialty: "Indo-Pacific lane monitoring & transponder tracking",
      bio: "25+ years commanding naval intelligence vessels. Specializes in electronic warfare tracking and commercial shipping chokepoint security.",
      clearance: "STRATEGIC ALERT",
      imageIcon: <Target className="h-8 w-8 text-gold-accent" />,
    },
    {
      name: "Sarah Jenkins",
      role: "Senior Cyber Threat Analyst",
      specialty: "Infrastructure APT scanning & signature tracking",
      bio: "Specializes in auditing sovereign power grids and central databases for digital intrusion. 8+ years in private threat response teams.",
      clearance: "ANALYST VERIFIED",
      imageIcon: <Eye className="h-8 w-8 text-gold-accent" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      
      {/* 1. Page Header */}
      <div className="border-b border-gold-accent/10 pb-6 text-center space-y-3">
        <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
          METHODOLOGY & INSTITUTIONAL STANDARDS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-text-primary tracking-tight">
          About Grey Lock & Co.
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Decoding the Grey Zone — Providing sovereign decision makers and global enterprises with high-trust, fully cited open source geopolitical intelligence.
        </p>
      </div>

      {/* 2. Mission & Story Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase font-display text-text-primary">
            Democratizing Geopolitical Insight
          </h2>
          <p className="text-xs text-text-secondary leading-relaxed">
            In an era of deep uncertainty, global enterprises and policymakers are constantly bombarded with conflicting news, narrative manipulation, and volatile regional friction. Standard consulting firms are too slow, and commercial media lacks data rigour. 
          </p>
          <p className="text-xs text-text-secondary leading-relaxed">
            <strong>Grey Lock & Co</strong> was founded to bridge this gap. We combine cutting-edge **Open Source Intelligence (OSINT)** automated telemetry grids with seasoned human analytical oversight. Our core mission is to help organizations separate signal from noise, protecting their global investments, operations, and strategic plans.
          </p>
        </div>
        
        {/* Cyber hud box */}
        <div className="lg:col-span-5 border border-gold-accent/15 bg-bg-secondary/40 p-5 rounded-sm glass-panel font-mono text-[10px] space-y-3">
          <div className="flex items-center gap-1.5 border-b border-gold-accent/10 pb-2 text-text-primary font-bold">
            <Shield className="h-4 w-4 text-gold-accent" />
            <span>OPERATIONAL CODE: GREY_OSINT_ACCORD</span>
          </div>
          <div className="space-y-1">
            <span className="text-[8.5px] text-text-secondary block">ESTABLISHED SYSTEM</span>
            <p className="text-text-primary">Active South Asia monitoring centers, certified OSINT engineers, independent private board.</p>
          </div>
          <div className="space-y-1">
            <span className="text-[8.5px] text-text-secondary block">COMPLIANCE CODE</span>
            <p className="text-text-primary">Full compliance with open publications standards, certified non-espionage operations.</p>
          </div>
        </div>
      </div>

      {/* 3. Core Standards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
        {coreStandards.map((item, idx) => (
          <TerminalCard key={idx} subtitle={`STANDARD PART ${idx + 1}`} title={item.title} classification="OSINT RIGOUR">
            <div className="space-y-3">
              <div className="h-9 w-9 bg-gold-accent/5 border border-gold-accent/25 rounded-sm flex items-center justify-center">
                {item.icon}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          </TerminalCard>
        ))}
      </div>

      {/* 4. Methodology Pipeline Visual */}
      <div className="border border-gold-accent/15 bg-bg-secondary/35 p-6 rounded-sm glass-panel space-y-6">
        <h3 className="font-mono text-xs font-bold text-text-primary uppercase text-center tracking-widest border-b border-gold-accent/10 pb-3">
          THE GREY LOCK INTELLIGENCE PROCESS PIPELINE
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 font-mono text-[10px] text-center">
          
          {/* Step 1 */}
          <div className="space-y-2 relative">
            <div className="h-10 w-10 mx-auto bg-bg-secondary border border-gold-accent/15 rounded-full flex items-center justify-center text-gold-accent font-bold">
              1
            </div>
            <h4 className="text-text-primary font-bold uppercase">Multi-Sensor Ingestion</h4>
            <p className="text-[9px] text-text-secondary leading-relaxed max-w-xs mx-auto">
              Scan commercial satellites, transponders, maritime radio spectrums, and narrative streams.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-2">
            <div className="h-10 w-10 mx-auto bg-bg-secondary border border-gold-accent/15 rounded-full flex items-center justify-center text-gold-accent font-bold">
              2
            </div>
            <h4 className="text-text-primary font-bold uppercase">Narrative Sentiment Scans</h4>
            <p className="text-[9px] text-text-secondary leading-relaxed max-w-xs mx-auto">
              Filter incoming digital traffic to isolate artificial state-aligned bot amplification trends.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-2">
            <div className="h-10 w-10 mx-auto bg-bg-secondary border border-gold-accent/15 rounded-full flex items-center justify-center text-gold-accent font-bold">
              3
            </div>
            <h4 className="text-text-primary font-bold uppercase">Human-Analyst Audits</h4>
            <p className="text-[9px] text-text-secondary leading-relaxed max-w-xs mx-auto">
              Subject experts apply ACH methodologies to cross-verify signals and eliminate false leads.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-2">
            <div className="h-10 w-10 mx-auto bg-bg-secondary border border-gold-accent/15 rounded-full flex items-center justify-center text-gold-accent font-bold">
              4
            </div>
            <h4 className="text-text-primary font-bold uppercase">Secure Dissemination</h4>
            <p className="text-[9px] text-text-secondary leading-relaxed max-w-xs mx-auto">
              Deliver actionable briefings, terminal updates, and secure PGP-encrypted briefings.
            </p>
          </div>

        </div>
      </div>

      {/* 5. Team Leadership Grid */}
      <div className="space-y-6 pt-6">
        <div className="text-center space-y-2">
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
            ANALYST CORPS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-display text-text-primary">
            Lead Strategic Analysts
          </h2>
          <p className="text-xs text-text-secondary max-w-xl mx-auto">
            Our research team is composed of seasoned former security officials, OSINT software engineers, and domain policy experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="border border-gold-accent/10 bg-bg-secondary/40 p-5 rounded-sm hover:border-gold-accent/25 transition-all flex flex-col justify-between space-y-4 shadow-sm animate-fade-in"
            >
              <div className="space-y-3">
                
                {/* Profile placeholder style */}
                <div className="h-24 bg-gradient-to-br from-bg-secondary to-bg-secondary/80 border border-gold-accent/15 rounded-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/20 to-[#0B0D12]/10 opacity-70"></div>
                  {member.imageIcon}
                  {/* corner crosshair */}
                  <div className="absolute top-1 left-1 text-[5px] font-mono text-gold-accent/20">+</div>
                  <div className="absolute bottom-1 right-1 text-[5px] font-mono text-gold-accent/20">+</div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-text-primary font-display uppercase tracking-wider">{member.name}</h3>
                  </div>
                  <span className="font-mono text-[9px] text-gold-accent uppercase block leading-tight">{member.role}</span>
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>

              <div className="border-t border-gold-accent/10 pt-3 space-y-1 font-mono text-[8.5px] text-text-secondary">
                <div>
                  SPECIALTY: <span className="text-text-primary uppercase">{member.specialty}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span>VERIFICATION:</span>
                  <ThreatBadge status={member.clearance} />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
