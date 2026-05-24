"use client";

import React, { useState } from "react";
import { Search, BookOpen, Calendar, ArrowRight, BookOpenCheck, Bookmark } from "lucide-react";
import ThreatBadge from "@/components/ThreatBadge";
import TerminalCard from "@/components/TerminalCard";

interface Article {
  id: string;
  category: "Situation Reports" | "Analysis" | "Case Studies" | "Strategic Forecasts";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  verified: boolean;
  featured?: boolean;
}

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const articles: Article[] = [
    {
      id: "art-1",
      category: "Analysis",
      title: "The Grey Zone Escalation in the Indo-Pacific: Hybrid Operations Explained",
      excerpt: "How state-aligned proxy groups leverage commercial maritime assets and dual-use cyber infrastructure to establish tactical sovereignty footholds without triggering conventional military responses. This brief deconstructs the maritime militia profiles detected in recent Indo-Pacific patrols.",
      date: "MAY 23, 2026",
      readTime: "9 min read",
      author: "C. Vance, Cyber Domain Lead",
      verified: true,
      featured: true,
    },
    {
      id: "art-2",
      category: "Strategic Forecasts",
      title: "Decoupling Dilemma: Technology Chokepoints and Sovereign Supply Chains",
      excerpt: "A deep technical evaluation of advanced semiconductor lithography supply lines, rare earth metal extraction processing monopolies, and sovereign industrial stockpiling. We predict significant regulatory and logistical friction for bilateral tech transfers in the next 18 months.",
      date: "MAY 18, 2026",
      readTime: "12 min read",
      author: "Dr. A. Sen, Senior South Asia Analyst",
      verified: true,
    },
    {
      id: "art-3",
      category: "Case Studies",
      title: "Cognitive Domain Interventions: Automated Narrative Inoculation Patterns",
      excerpt: "Deconstructing a coordinated state-sponsored bot swarm deployment targeting deepwater trade negotiations in South Asia. This study details the telemetry logs of automated fake accounts, their amplification velocity, and the defensive data inoculation strategies deployed.",
      date: "MAY 12, 2026",
      readTime: "15 min read",
      author: "Sarah Jenkins, Cyber Threat Analyst",
      verified: true,
    },
    {
      id: "art-4",
      category: "Situation Reports",
      title: "Flash Report: Choke-point Jamming & Electronic Spoofing Signals in Malacca Strait",
      excerpt: "Live telemetry logs verify a high-frequency electronic interference surge impacting GPS and transponder systems of commercial cargo ships transiting key Indo-Pacific shipping lanes. This briefing outlines exact signal coordinates and frequency ranges recorded by OSINT arrays.",
      date: "MAY 02, 2026",
      readTime: "6 min read",
      author: "Capt. M. Ross (Ret.), Maritime Specialist",
      verified: true,
    },
  ];

  const filteredArticles = articles.filter((art) => {
    if (activeCategory !== "ALL" && art.category !== activeCategory) return false;
    const query = searchTerm.toLowerCase();
    return (
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.author.toLowerCase().includes(query)
    );
  });

  const categories = ["ALL", "Situation Reports", "Analysis", "Case Studies", "Strategic Forecasts"];

  // Find the featured article (only from the active filtered set, or fallback to first)
  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">
      
      {/* Editorial Header */}
      <div className="border-b border-gold-accent/10 pb-6 text-center space-y-3">
        <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
          THE GREY ZONE BRIEFINGS & ANALYSIS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-text-primary tracking-tight">
          Grey Lock Insights
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Elite journalistic and academic-grade geopolitical forecasting. Mimicking Stratfor's analytical depth and Foreign Policy's narrative expertise.
        </p>
      </div>

      {/* Publications Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-bg-secondary/20 border border-gold-accent/10 p-3 rounded-sm font-mono text-[10px]">
        {/* Category Selector */}
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

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gold-accent/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search publication archives..."
            className="w-full pl-9 pr-4 py-1.5 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
          />
        </div>
      </div>

      {filteredArticles.length > 0 ? (
        <div className="space-y-12">
          
          {/* A. FEATURED ARTICLE BLOCK (Large editorial hero card) */}
          {featuredArticle && (
            <div className="border border-gold-accent/15 bg-bg-secondary/35 rounded-sm p-6 lg:p-8 glass-panel relative overflow-hidden group shadow-md">
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-accent/40"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-accent/40"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-accent/40"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-accent/40"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Tech vector art decoration */}
                <div className="lg:col-span-4 h-56 bg-gradient-to-br from-bg-secondary to-bg-secondary/80 border border-gold-accent/15 rounded-sm p-4 flex flex-col justify-between font-mono relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/20 to-[#0B0D12]/10 opacity-80 pointer-events-none"></div>
                  <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gold-accent/10"></div>
                  <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold-accent/10"></div>
                  
                  <div className="flex justify-between items-start relative z-10">
                    <span className="text-[8px] px-1.5 py-0.5 bg-bg-secondary border border-gold-accent/15 text-text-secondary uppercase">
                      FEATURED ANALYSIS
                    </span>
                    <ThreatBadge status="ANALYST VERIFIED" />
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-gold-accent animate-pulse-slow" />
                  </div>

                  <span className="text-[8px] text-text-secondary/60 uppercase tracking-widest text-right relative z-10">
                    GL-BRIEF-HERO
                  </span>
                </div>

                {/* Article Info */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 font-mono text-[9px]">
                    <span className="px-2 py-0.5 bg-gold-accent/5 border border-gold-accent/20 text-gold-accent uppercase font-bold rounded-sm">
                      {featuredArticle.category}
                    </span>
                    <span className="text-text-secondary flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-gold-accent/50" />
                      {featuredArticle.date}
                    </span>
                    <span className="text-text-secondary">•</span>
                    <span className="text-text-secondary">{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-text-primary group-hover:text-gold-accent transition-colors font-display leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="border-t border-gold-accent/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
                    <div className="text-[10px] text-gold-muted/80 uppercase">
                      AUTHOR: {featuredArticle.author}
                    </div>
                    <a
                      href={`/contact?type=media&topic=${encodeURIComponent(featuredArticle.title)}`}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-gold-accent hover:text-text-primary uppercase transition-colors"
                    >
                      <span>ACCESS FULL TEXT & CITATIONS</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* B. LIST OF REGULAR ARTICLES */}
          {regularArticles.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularArticles.map((art) => (
                <div
                  key={art.id}
                  className="border border-gold-accent/10 bg-bg-secondary/20 p-5 rounded-sm hover:border-gold-accent/25 transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 font-mono text-[8.5px]">
                      <span className="text-gold-accent font-bold uppercase">{art.category}</span>
                      <span className="text-text-secondary flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-gold-accent/50" />
                        {art.date}
                      </span>
                      <span className="text-text-secondary">•</span>
                      <span className="text-text-secondary">{art.readTime}</span>
                    </div>

                    <h3 className="text-sm sm:text-md font-bold uppercase tracking-wider text-text-primary hover:text-gold-accent transition-colors font-display">
                      {art.title}
                    </h3>

                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="border-t border-gold-accent/10 pt-3 flex items-center justify-between font-mono text-[9px]">
                    <div className="text-text-secondary">
                      BY: <span className="text-gold-muted">{art.author}</span>
                    </div>
                    
                    <a
                      href={`/contact?type=media&topic=${encodeURIComponent(art.title)}`}
                      className="text-gold-accent hover:text-text-primary uppercase font-bold flex items-center gap-1"
                    >
                      <span>READ</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      ) : (
        <div className="text-center py-20 border border-gold-accent/10 bg-bg-secondary/20 rounded-sm font-mono text-xs text-text-secondary">
          No articles matches query. Try adjusting your parameters.
        </div>
      )}

      {/* Magazine Footer HUD Banner */}
      <div className="border border-gold-accent/10 bg-bg-secondary/30 p-6 rounded-sm text-center relative overflow-hidden space-y-4">
        <div className="max-w-md mx-auto space-y-2">
          <Bookmark className="h-5 w-5 text-gold-accent mx-auto" />
          <h3 className="text-sm font-bold uppercase font-display text-text-primary">
            Syndicated Strategic Briefs
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Interested in syndicating Grey Lock & Co insights for corporate intranet or institutional feeds? Secure API keys are available upon corporate clearance.
          </p>
        </div>
        <a
          href="/contact?type=corporate"
          className="inline-block px-5 py-2 border border-gold-accent/30 text-gold-accent text-[10px] font-bold font-mono uppercase tracking-widest hover:bg-gold-accent/5 transition-colors rounded-sm"
        >
          &gt; INQUIRE SECURE API KEY
        </a>
      </div>

    </div>
  );
}
