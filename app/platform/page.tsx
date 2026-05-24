"use client";

import React, { useState, useEffect } from "react";
import { Search, Radio, Bell, Shield, Info, ShieldAlert, Cpu, Layers, RefreshCw } from "lucide-react";
import InteractiveMap from "@/components/InteractiveMap";
import ThreatBadge from "@/components/ThreatBadge";
import TerminalCard from "@/components/TerminalCard";

interface CountryRisk {
  country: string;
  score: number;
  trend: "UP" | "DOWN" | "STABLE";
  status: string;
  category: string;
}

export default function Platform() {
  const [searchTerm, setSearchTerm] = useState("");
  const [alertsFilter, setAlertsFilter] = useState<"ALL" | "CRITICAL" | "INFO">("ALL");
  const [latency, setLatency] = useState(12);

  // Dynamic latency generator for that realistic terminal feel
  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(Math.random() * 6) + 10); // 10-15ms
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const countriesData: CountryRisk[] = [
    { country: "India", score: 48, trend: "STABLE", status: "BORDER MONITORING", category: "South Asia" },
    { country: "China", score: 82, trend: "UP", status: "MARITIME POSTURE / CYBER SCAN", category: "Global" },
    { country: "Pakistan", score: 76, trend: "UP", status: "PARAMILITARY MOVEMENTS", category: "South Asia" },
    { country: "Russia", score: 88, trend: "STABLE", status: "COGNITIVE NARRATIVE FOCUS", category: "Global" },
    { country: "USA", score: 35, trend: "DOWN", status: "DEFENSE TECH SECURITY AUDIT", category: "Global" },
    { country: "Iran", score: 78, trend: "UP", status: "ELECTRONIC WARFARE IN GULF", category: "Global" },
    { country: "Bangladesh", score: 54, trend: "STABLE", status: "TRANSIT INFRASTRUCTURE AUDIT", category: "South Asia" },
    { country: "Myanmar", score: 72, trend: "UP", status: "BORDER ROUTING INSTABILITY", category: "South Asia" },
  ];

  const liveAlerts = [
    {
      id: "a1",
      type: "CRITICAL",
      title: "GPS Spoofing Activity Spike",
      source: "Arabian Sea transit corridor shipping logs.",
      time: "2 MINS AGO",
    },
    {
      id: "a2",
      type: "CRITICAL",
      title: "Information Narrative Push",
      source: "State-aligned proxy network targeting trade hubs.",
      time: "14 MINS AGO",
    },
    {
      id: "a3",
      type: "INFO",
      title: "Frontier Communications Intercept",
      source: "Radio frequency spectrum scan spikes recorded.",
      time: "32 MINS AGO",
    },
    {
      id: "a4",
      type: "INFO",
      title: "Bilateral Defense Sharing Review",
      source: "Washington circular update on mineral accords.",
      time: "1 HR AGO",
    },
    {
      id: "a5",
      type: "CRITICAL",
      title: "Transit Corridor Pipeline Posture",
      source: "Rebel network encrypted traffic surge detected.",
      time: "2 HRS AGO",
    },
  ];

  const filteredCountries = countriesData.filter(item =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAlerts = liveAlerts.filter(alert => {
    if (alertsFilter === "ALL") return true;
    if (alertsFilter === "CRITICAL") return alert.type === "CRITICAL";
    return alert.type === "INFO";
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. TOP HUD / COMMAND TERMINAL BAR */}
      <div className="glass-panel rounded-sm border border-gold-accent/15 p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gold-accent/10 border border-gold-accent/40 rounded-sm flex items-center justify-center">
            <Cpu className="h-4.5 w-4.5 text-gold-accent" />
          </div>
          <div>
            <span className="text-[10px] text-text-primary font-bold block tracking-widest uppercase">
              GREY LOCK INTEL TERMINAL
            </span>
            <span className="text-[8px] text-text-secondary block">
              LATENCY: <span className="text-success">{latency}ms</span> // INTEGRITY: <span className="text-success">98.4%</span> // PORT: SECURE_13
            </span>
          </div>
        </div>

        {/* Search Field inside hud */}
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gold-accent/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search intelligence, coordinates, or threats..."
            className="w-full pl-9 pr-4 py-1.5 bg-bg-primary/80 border border-gold-accent/15 text-text-primary text-[10px] focus:outline-none focus:border-gold-accent rounded-sm"
          />
        </div>

        {/* HUD right telemetry */}
        <div className="flex items-center gap-4 text-[9px] text-text-secondary self-end md:self-auto">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-bg-secondary border border-gold-accent/15 rounded-sm">
            <Radio className="h-3 w-3 text-danger animate-pulse" />
            <span className="text-text-primary">LIVE MONITORS ON</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers className="h-3.5 w-3.5 text-gold-accent" />
            <span>GEO-REF: 902.1A</span>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC STRATEGIC KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* KPI 1: Global Risk Index */}
        <TerminalCard subtitle="COEFFICIENT SUMMARY" title="Global Risk Index" classification="SYSTEM INDEX">
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-text-primary tracking-tight leading-none terminal-glow-gold">64.8%</span>
              <span className="text-[10px] font-mono text-danger font-semibold flex items-center">
                ▲ 4.2% THIS WEEK
              </span>
            </div>
            {/* Simple sparkline graphic inside HUD card using standard SVGs */}
            <div className="h-8 w-full border-b border-gold-accent/10 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path
                  d="M0,15 L20,12 L40,16 L60,8 L80,10 L100,2"
                  fill="none"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                />
                <circle cx="100" cy="2" r="2" fill="#D4AF37" />
              </svg>
            </div>
          </div>
        </TerminalCard>

        {/* KPI 2: Active Crises */}
        <TerminalCard subtitle="GEOGRAPHIC MONITOR" title="Active Crises" classification="CRITICAL MONITORS">
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-text-primary tracking-tight leading-none terminal-glow-red">8 SECTORS</span>
              <span className="text-[10px] font-mono text-danger font-semibold animate-pulse">
                HIGH THREAT LEVEL
              </span>
            </div>
            <div className="h-8 w-full border-b border-gold-accent/10 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <rect x="0" y="8" width="8" height="12" fill="rgba(243, 18, 96, 0.4)" />
                <rect x="12" y="5" width="8" height="15" fill="rgba(243, 18, 96, 0.4)" />
                <rect x="24" y="10" width="8" height="10" fill="rgba(243, 18, 96, 0.2)" />
                <rect x="36" y="2" width="8" height="18" fill="rgba(243, 18, 96, 0.6)" />
                <rect x="48" y="7" width="8" height="13" fill="rgba(243, 18, 96, 0.4)" />
                <rect x="60" y="1" width="8" height="19" fill="rgba(243, 18, 96, 0.8)" className="animate-pulse" />
                <rect x="72" y="4" width="8" height="16" fill="rgba(243, 18, 96, 0.6)" />
                <rect x="84" y="0" width="8" height="20" fill="#F31260" />
              </svg>
            </div>
          </div>
        </TerminalCard>

        {/* KPI 3: InfoWar Alerts */}
        <TerminalCard subtitle="COGNITIVE DOMAIN" title="Influence Campaigns" classification="BOTNET OUTBREAKS">
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-text-primary tracking-tight leading-none terminal-glow-gold">4 OUTBREAKS</span>
              <span className="text-[10px] font-mono text-warning font-semibold">
                NARRATIVE SCAN ACTIVE
              </span>
            </div>
            <div className="h-8 w-full border-b border-gold-accent/10 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <path
                  d="M0,18 Q25,2 50,15 T100,5"
                  fill="none"
                  stroke="#F5A524"
                  strokeWidth="1.2"
                  strokeDasharray="2,2"
                />
                <circle cx="50" cy="15" r="2" fill="#F5A524" />
                <circle cx="100" cy="5" r="2.5" fill="#F5A524" className="animate-ping" />
              </svg>
            </div>
          </div>
        </TerminalCard>

        {/* KPI 4: Emerging Threats */}
        <TerminalCard subtitle="PREDICTIVE SIGNALS" title="Emerging Threats" classification="OSINT VERIFIED">
          <div className="space-y-2">
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-text-primary tracking-tight leading-none terminal-glow-gold">14 SIGNALS</span>
              <span className="text-[10px] font-mono text-success font-semibold">
                LOW-PEAK DUAL USE
              </span>
            </div>
            <div className="h-8 w-full border-b border-gold-accent/10 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 100 20">
                <line x1="0" y1="18" x2="20" y2="15" stroke="#18C964" strokeWidth="1" />
                <line x1="20" y1="15" x2="40" y2="12" stroke="#18C964" strokeWidth="1" />
                <line x1="40" y1="12" x2="60" y2="16" stroke="#18C964" strokeWidth="1" />
                <line x1="60" y1="16" x2="80" y2="10" stroke="#18C964" strokeWidth="1" />
                <line x1="80" y1="10" x2="100" y2="6" stroke="#18C964" strokeWidth="1.5" />
                <circle cx="100" cy="6" r="2" fill="#18C964" />
              </svg>
            </div>
          </div>
        </TerminalCard>

      </div>

      {/* 3. CENTERPIECE MAP & LIVE FEED GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Interactive World Map Centerpiece */}
        <div className="lg:col-span-8 flex flex-col h-full">
          <InteractiveMap />
        </div>

        {/* Live Alerts scrolling terminal feed sidebar */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="glass-panel border border-gold-accent/15 rounded-sm p-4 h-full flex flex-col justify-between space-y-4">
            
            {/* Sidebar header */}
            <div className="border-b border-gold-accent/10 pb-3 font-mono flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-gold-accent animate-pulse" />
                <span className="text-xs font-bold text-text-primary uppercase tracking-wider">
                  SIGINT INTELLIGENCE FEED
                </span>
              </div>
              <span className="text-[8px] px-1 bg-bg-secondary text-text-secondary">SYS_V: 4.8</span>
            </div>

            {/* Alerts Filters */}
            <div className="flex border border-gold-accent/10 rounded-sm overflow-hidden font-mono text-[9px] w-full">
              <button
                onClick={() => setAlertsFilter("ALL")}
                className={`flex-1 py-1 text-center transition-colors ${
                  alertsFilter === "ALL" ? "bg-gold-accent text-bg-primary font-bold" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                ALL
              </button>
              <button
                onClick={() => setAlertsFilter("CRITICAL")}
                className={`flex-1 py-1 text-center border-x border-gold-accent/10 transition-colors ${
                  alertsFilter === "CRITICAL" ? "bg-danger text-text-primary font-bold" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                CRITICAL
              </button>
              <button
                onClick={() => setAlertsFilter("INFO")}
                className={`flex-1 py-1 text-center transition-colors ${
                  alertsFilter === "INFO" ? "bg-bg-secondary text-text-primary font-bold" : "text-text-secondary hover:text-text-primary"
                }`}
              >
                INFO
              </button>
            </div>

            {/* Scrolling alert items block */}
            <div className="flex-grow space-y-3 overflow-y-auto max-h-[300px] pr-1">
              {filteredAlerts.length > 0 ? (
                filteredAlerts.map((alert) => (
                  <div
                    key={alert.id}
                    className={`border-l-2 p-2.5 space-y-1 font-mono text-[10px] transition-all hover:bg-bg-secondary/40 ${
                      alert.type === "CRITICAL"
                        ? "border-danger bg-danger/[0.02]"
                        : "border-gold-accent/40 bg-gold-accent/[0.01]"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[8.5px]">
                      <span className={alert.type === "CRITICAL" ? "text-danger font-bold" : "text-gold-muted"}>
                        {alert.type === "CRITICAL" ? "[STRATEGIC ALERT]" : "[TELEMETRY LOG]"}
                      </span>
                      <span className="text-text-secondary">{alert.time}</span>
                    </div>
                    <h4 className="text-text-primary font-semibold leading-snug">{alert.title}</h4>
                    <p className="text-[9px] text-text-secondary leading-relaxed">{alert.source}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 font-mono text-[10px] text-text-secondary">
                  No signals match filter settings.
                </div>
              )}
            </div>

            {/* Sidebar Bottom HUD */}
            <div className="border-t border-gold-accent/10 pt-3 font-mono text-[8.5px] text-text-secondary flex justify-between">
              <span>ACTIVE PIPELINE: GL-MONITOR</span>
              <span>CONFIDENCE INDEX: 94%</span>
            </div>

          </div>
        </div>

      </div>

      {/* 4. THREAT MONITOR RANKINGS TABLE */}
      <div className="glass-panel border border-gold-accent/15 rounded-sm p-5 space-y-4">
        
        {/* Table header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gold-accent/10 pb-3 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-gold-accent animate-ping"></span>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary">
              GEOPOLITICAL THREAT ASSESSMENT MATRIX
            </h3>
          </div>
          <div className="font-mono text-[9px] text-text-secondary">
            TOTAL COUNTRY INDICES IN MATRIX: {filteredCountries.length}
          </div>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto border border-gold-accent/10 rounded-sm font-mono text-[11px]">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="bg-bg-secondary/50 text-text-secondary border-b border-gold-accent/10 uppercase text-[9px] tracking-wider">
                <th className="py-3 px-4">COUNTRY MONITOR</th>
                <th className="py-3 px-4">REGION</th>
                <th className="py-3 px-4">RISK COEFFICIENT</th>
                <th className="py-3 px-4">TREND</th>
                <th className="py-3 px-4">CURRENT OPERATIONAL STATUS</th>
                <th className="py-3 px-4 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {filteredCountries.length > 0 ? (
                filteredCountries.map((row) => (
                  <tr
                    key={row.country}
                    className="border-b border-gold-accent/5 hover:bg-bg-secondary/20 transition-colors"
                  >
                    <td className="py-2.5 px-4 text-text-primary font-bold">{row.country}</td>
                    <td className="py-2.5 px-4 text-text-secondary">{row.category}</td>
                    <td className="py-2.5 px-4 font-bold text-sm">
                      <span
                        className={
                          row.score > 70
                            ? "text-danger terminal-glow-red"
                            : row.score > 40
                            ? "text-warning"
                            : "text-success"
                        }
                      >
                        {row.score}%
                      </span>
                    </td>
                    <td className="py-2.5 px-4">
                      {row.trend === "UP" ? (
                        <span className="text-danger font-semibold">▲ ESCALATING</span>
                      ) : row.trend === "DOWN" ? (
                        <span className="text-success font-semibold">▼ MITIGATING</span>
                      ) : (
                        <span className="text-warning font-semibold">■ STABLE</span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-[10px] text-text-secondary uppercase">
                      &gt; {row.status}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <a
                        href="/reports"
                        className="px-2.5 py-1 bg-bg-secondary border border-gold-accent/25 text-gold-accent text-[9px] uppercase tracking-wider hover:bg-gold-accent hover:text-bg-primary transition-colors rounded-sm"
                      >
                        READ BRIEF
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-text-secondary">
                    No active monitored countries match query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* HUD bottom indicators */}
        <div className="font-mono text-[9px] text-text-secondary/60 flex flex-wrap gap-4 pt-1 justify-between">
          <span>// CLASSIFICATION: CONFIDENTIAL / INTERNAL OSINT FEEDS</span>
          <span>LAST AUTOMATED DATA SYNC: 14 SECONDS AGO</span>
        </div>

      </div>

    </div>
  );
}
