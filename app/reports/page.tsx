"use client";

import React, { useState } from "react";
import { Search, BookOpen, Clock, User, Download, FileText, CheckCircle } from "lucide-react";
import ThreatBadge from "@/components/ThreatBadge";
import TerminalCard from "@/components/TerminalCard";

interface Report {
  id: string;
  category: "Geopolitics" | "Security" | "Information Warfare";
  region: "South Asia" | "Global";
  title: string;
  summary: string;
  riskScore: number;
  date: string;
  readTime: string;
  author: string;
  confidence: string;
  code: string;
}

export default function Reports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [downloadedReportId, setDownloadedReportId] = useState<string | null>(null);

  const reports: Report[] = [
    {
      id: "rep-1",
      category: "Geopolitics",
      region: "South Asia",
      title: "India Strategic Risk Outlook 2026",
      summary: "Comprehensive assessment of northern border security posture, critical mineral supply chains, and Indian Ocean defense agreements in the context of expanding regional rivalries.",
      riskScore: 48,
      date: "MAY 24, 2026",
      readTime: "12 min read",
      author: "Dr. A. Sen, Senior South Asia Analyst",
      confidence: "HIGH CONFIDENCE",
      code: "GL-GEO-2026-IN",
    },
    {
      id: "rep-2",
      category: "Information Warfare",
      region: "Global",
      title: "China Influence Operations Assessment",
      summary: "Detailed analysis of cognitive domain operations, narrative push regarding global supply-chain decoupling, and industrial cyber espionage target matrices.",
      riskScore: 82,
      date: "MAY 19, 2026",
      readTime: "18 min read",
      author: "C. Vance, Cyber Domain Lead",
      confidence: "ANALYST VERIFIED",
      code: "GL-INF-2026-ZH",
    },
    {
      id: "rep-3",
      category: "Security",
      region: "South Asia",
      title: "South Asia Security Brief",
      summary: "Strategic monitoring of deepwater shipping lane vulnerabilities, naval deployment profiles in the Malacca Strait, and commercial shipping GPS spoofing frequencies.",
      riskScore: 76,
      date: "MAY 15, 2026",
      readTime: "9 min read",
      author: "Capt. M. Ross (Ret.), Maritime Specialist",
      confidence: "STRATEGIC ALERT",
      code: "GL-SEC-2026-SA",
    },
    {
      id: "rep-4",
      category: "Security",
      region: "South Asia",
      title: "Indian Ocean Maritime Chokepoint Analysis",
      summary: "Assessing maritime electronic surveillance spikes, ship transponder spoofing patterns, and commercial ship detours in the Arabian Gulf corridors.",
      riskScore: 68,
      date: "MAY 08, 2026",
      readTime: "14 min read",
      author: "Rear Adm. K. Patel (Ret.), Maritime Security Specialist",
      confidence: "HIGH CONFIDENCE",
      code: "GL-SEC-2026-IO",
    },
    {
      id: "rep-5",
      category: "Information Warfare",
      region: "Global",
      title: "Indo-Pacific Cybersecurity Vulnerabilities",
      summary: "Evaluating state-aligned advanced persistent threats (APTs) targeting energy transit grids, maritime routing databases, and satellite link relays.",
      riskScore: 58,
      date: "APR 28, 2026",
      readTime: "11 min read",
      author: "Sarah Jenkins, Senior Cyber Threat Analyst",
      confidence: "ANALYST VERIFIED",
      code: "GL-INF-2026-IP",
    },
    {
      id: "rep-6",
      category: "Geopolitics",
      region: "South Asia",
      title: "Bangladesh Stability & Trade Risk Matrix",
      summary: "Strategic evaluation of transition government border policies, structural infrastructure financing dependencies, and digital trade gateway cybersecurity posturing.",
      riskScore: 54,
      date: "APR 12, 2026",
      readTime: "16 min read",
      author: "Prof. R. Rahman, Regional Stability Lead",
      confidence: "WARNING",
      code: "GL-GEO-2026-BD",
    },
  ];

  const handleDownload = (id: string) => {
    setDownloadedReportId(id);
    setTimeout(() => {
      setDownloadedReportId(null);
    }, 2500);
  };

  const filteredReports = reports.filter((report) => {
    // Category check
    if (activeCategory !== "ALL") {
      if (activeCategory === "Geopolitics" && report.category !== "Geopolitics") return false;
      if (activeCategory === "Security" && report.category !== "Security") return false;
      if (activeCategory === "Information Warfare" && report.category !== "Information Warfare") return false;
      if (activeCategory === "South Asia" && report.region !== "South Asia") return false;
      if (activeCategory === "Global" && report.region !== "Global") return false;
    }

    // Search query check
    const query = searchTerm.toLowerCase();
    return (
      report.title.toLowerCase().includes(query) ||
      report.summary.toLowerCase().includes(query) ||
      report.author.toLowerCase().includes(query) ||
      report.code.toLowerCase().includes(query)
    );
  });

  const categories = ["ALL", "Geopolitics", "Security", "Information Warfare", "South Asia", "Global"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-gold-accent/10 pb-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 bg-gold-accent rounded-full"></span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold">
            INSTITUTIONAL INTELLIGENCE ARCHIVE
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold uppercase font-display text-text-primary">
              Strategic Intelligence Reports
            </h1>
            <p className="text-xs text-text-secondary max-w-xl leading-relaxed">
              Access curated high-fidelity open-source intelligence briefs, deep technical assessments, and risk predictions written by our team of analysts.
            </p>
          </div>

          {/* Quick HUD specs */}
          <div className="font-mono text-[9.5px] text-text-secondary flex gap-4 bg-bg-secondary/40 border border-gold-accent/15 px-4 py-2 rounded-sm self-start md:self-auto">
            <div>
              <span className="text-text-primary block">OSINT LEVEL:</span>
              <span className="text-gold-accent font-bold">UNRESTRICTED PUBLIC ACCESS</span>
            </div>
            <div className="border-l border-gold-accent/15 pl-4">
              <span className="text-text-primary block">ARCHIVE INDEX:</span>
              <span className="text-text-primary">6 OF 6 ASSESSMENTS LOADED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-bg-secondary/20 border border-gold-accent/10 p-3 rounded-sm font-mono text-[10px]">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 uppercase transition-colors rounded-sm ${
                activeCategory === cat
                  ? "bg-gold-accent text-bg-primary font-bold shadow-[0_0_8px_rgba(212,175,55,0.2)]"
                  : "bg-bg-secondary text-text-secondary hover:text-text-primary cursor-pointer"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gold-accent/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search report titles, summaries, codes..."
            className="w-full pl-9 pr-4 py-1.5 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
          />
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReports.length > 0 ? (
          filteredReports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col justify-between border border-gold-accent/10 bg-bg-secondary/40 rounded-sm hover:border-gold-accent/30 transition-all group overflow-hidden"
            >
              
              {/* Report Cover HUD Header */}
              <div className="h-36 bg-gradient-to-br from-bg-secondary to-bg-secondary/80 border-b border-gold-accent/10 p-4 flex flex-col justify-between font-mono relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/20 to-[#0B0D12]/10 opacity-70 pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold-accent/5"></div>
                <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gold-accent/5"></div>

                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[8px] px-1.5 py-0.5 bg-bg-secondary border border-gold-accent/15 text-text-secondary uppercase">
                    {report.code}
                  </span>
                  <ThreatBadge status={report.confidence} />
                </div>

                <div className="flex justify-between items-end relative z-10">
                  <span className="font-display font-extrabold text-[10px] text-text-primary tracking-widest uppercase">
                    {report.category}
                  </span>
                  <div className="flex items-center gap-1 text-danger font-bold text-[10px]">
                    <span>RISK:</span>
                    <span className="text-xs">{report.riskScore}%</span>
                  </div>
                </div>
              </div>

              {/* Report Information Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-md font-bold uppercase tracking-wider text-text-primary group-hover:text-gold-accent transition-colors font-display">
                    {report.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-4">
                    {report.summary}
                  </p>
                </div>

                {/* Technical stats lines */}
                <div className="border-t border-gold-accent/10 pt-3 space-y-2 font-mono text-[9px] text-text-secondary">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-gold-accent/60" />
                      <span>{report.readTime}</span>
                    </span>
                    <span>PUBLISHED: {report.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8.5px] text-gold-muted/80 uppercase">
                    <User className="h-3 w-3 text-gold-accent/60" />
                    <span>ANALYST: {report.author}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 border-t border-gold-accent/10 font-mono text-[9.5px]">
                <a
                  href={`/contact?type=briefing&report=${report.code}`}
                  className="py-3 text-center bg-bg-primary/20 hover:bg-gold-accent/5 text-gold-accent font-bold uppercase tracking-widest transition-colors border-r border-gold-accent/10"
                >
                  &gt; REQUEST BRIEF
                </a>
                
                {downloadedReportId === report.id ? (
                  <button
                    disabled
                    className="py-3 text-center bg-success/5 text-success font-bold uppercase tracking-widest flex items-center justify-center gap-1.5 animate-fade-in"
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                    <span>DOWNLOADED</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleDownload(report.id)}
                    className="py-3 text-center bg-bg-primary/20 hover:bg-bg-secondary/60 text-text-primary font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5 text-gold-accent" />
                    <span>SECURE PDF</span>
                  </button>
                )}
              </div>

            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 border border-gold-accent/10 bg-bg-secondary/20 rounded-sm font-mono text-xs text-text-secondary">
            No reports matches active filters or search terms. Try modifying your parameters.
          </div>
        )}
      </div>

      {/* Bottom HUD security panel */}
      <div className="border border-gold-accent/10 bg-bg-secondary/10 p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-text-secondary gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-gold-accent" />
          <span>REQUEST ENCRYPTED PHYSICAL BRIEFINGS FOR CORPORATE SECURITY TEAMS VIA SECURE INQUIRY FORM.</span>
        </div>
        <a
          href="/contact"
          className="text-gold-accent hover:text-text-primary uppercase transition-colors font-bold"
        >
          &gt; CONNECT SECURE CHANNEL
        </a>
      </div>

    </div>
  );
}
