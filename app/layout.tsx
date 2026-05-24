import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grey Lock & Co — Geopolitical Intelligence & Strategic Risk Monitor",
  description: "Decoding the Grey Zone — Modern India-focused intelligence monitoring country risks, strategic information warfare, narrative analysis, and conflict developments for decision makers.",
  keywords: ["Geopolitical intelligence", "Strategic risk assessment", "Information warfare", "Disinformation monitoring", "South Asia security", "Grey Zone analysis", "Palantir alternative"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary military-grid selection:bg-gold-accent/20 selection:text-gold-accent font-sans">
        
        {/* Subtle grid pattern scanning element */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Radar background dots */}
          <div className="absolute inset-0 radar-dots opacity-40"></div>
          {/* Muted radar sweep grid gradient */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D12]/60 to-[#0B0D12] opacity-80"></div>
        </div>

        {/* Global sticky navigation bar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow pt-24 z-10 relative">
          {children}
        </main>

        {/* Themed Cybernetic Footer */}
        <footer className="z-10 relative bg-bg-secondary/60 border-t border-gold-accent/10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              {/* Column 1: Brand Info */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-md font-bold font-display uppercase tracking-widest text-white">
                    Grey Lock <span className="text-gold-accent">& Co.</span>
                  </span>
                </div>
                <p className="text-xs text-text-secondary max-w-sm leading-relaxed">
                  "Decoding the Grey Zone — Intelligence for an Uncertain World." 
                  Grey Lock & Co is an enterprise-grade geopolitical intelligence firm offering predictive forecasting, strategic narrative monitoring, and regional risk assessments.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2 py-0.5 border border-gold-accent/25 bg-gold-accent/5 font-mono text-[9px] text-gold-accent uppercase rounded-sm">
                    CLASSIFICATION: PUBLIC
                  </span>
                  <span className="px-2 py-0.5 border border-white/10 bg-white/5 font-mono text-[9px] text-text-secondary uppercase rounded-sm">
                    OSINT VERIFIED
                  </span>
                  <span className="px-2 py-0.5 border border-success/20 bg-success/5 font-mono text-[9px] text-success uppercase rounded-sm">
                    SECURE PORTAL
                  </span>
                </div>
              </div>

              {/* Column 2: Navigation Links */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 border-l-2 border-gold-accent pl-2">
                  Intelligence Operations
                </h4>
                <ul className="space-y-2 text-xs font-mono text-text-secondary">
                  <li>
                    <a href="/platform" className="hover:text-gold-accent transition-colors">
                      &gt; Risk Terminal
                    </a>
                  </li>
                  <li>
                    <a href="/reports" className="hover:text-gold-accent transition-colors">
                      &gt; Intelligence Reports
                    </a>
                  </li>
                  <li>
                    <a href="/insights" className="hover:text-gold-accent transition-colors">
                      &gt; Situation Analysis
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="hover:text-gold-accent transition-colors">
                      &gt; OSINT Methodology
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3: Contact & Info */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4 border-l-2 border-gold-accent pl-2">
                  Command Center
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">
                  Secured inquiry portal for government agency, enterprise, and corporate consultation.
                </p>
                <a
                  href="/contact"
                  className="inline-block text-xs font-mono text-gold-accent hover:text-white transition-colors"
                >
                  &gt; Open Secure Channel
                </a>
              </div>

            </div>

            {/* Bottom Panel */}
            <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-text-secondary">
              <div>
                &copy; {new Date().getFullYear()} GREY LOCK & CO. ALL RIGHTS RESERVED.
              </div>
              <div className="mt-2 sm:mt-0 flex items-center gap-4">
                <span>CONNECTION STATUS: SECURE (TLS 1.3)</span>
                <span className="hidden sm:inline-block">SYSTEM LATENCY: &lt;14MS</span>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
