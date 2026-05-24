"use client";

import React, { useState } from "react";
import { ShieldAlert, Cpu, Terminal, Key, ShieldCheck, Mail, Send, Radio, Lock } from "lucide-react";
import ThreatBadge from "@/components/ThreatBadge";
import TerminalCard from "@/components/TerminalCard";

type FormType = "BRIEFING" | "CORPORATE" | "MEDIA";

export default function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>("BRIEFING");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    clearanceLevel: "LEVEL_1",
    purpose: "",
    details: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      organization: "",
      email: "",
      clearanceLevel: "LEVEL_1",
      purpose: "",
      details: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-gold-accent/10 pb-6 text-center space-y-3">
        <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold block">
          SECURE ENCRYPTED COMMUNICATIONS CHANNEL
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold uppercase font-display text-text-primary tracking-tight">
          Establish Contact
        </h1>
        <p className="text-xs sm:text-sm text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Open a secured operational lead channel. Corporate briefings, media inquiries, and strategic assessments are routed through dedicated analysts.
        </p>
      </div>

      {/* Main Grid: Form + Secure Telemetry Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Form Container (Left) */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div className="glass-panel border border-gold-accent/15 rounded-sm p-6 space-y-6 h-full flex flex-col justify-between">
            
            {/* Cyber Brackets */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-gold-accent/40"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-gold-accent/40"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-gold-accent/40"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-gold-accent/40"></div>

            {submitted ? (
              /* Simulated Telemetry Submission Success State */
              <div className="flex-grow flex flex-col justify-center items-center text-center space-y-6 py-12 font-mono">
                <div className="h-16 w-16 bg-success/5 border border-success/30 rounded-full flex items-center justify-center animate-pulse">
                  <ShieldCheck className="h-8 w-8 text-success" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-md font-bold text-text-primary uppercase tracking-widest">
                    TRANSMISSION DISPATCHED SECURELY
                  </h3>
                  <span className="text-[10px] text-success block">
                    STATUS: ROUTING TO COMPATIBLE REGIONAL DEPT
                  </span>
                </div>

                <div className="border border-gold-accent/10 bg-bg-primary/80 p-4 rounded-sm max-w-lg text-left text-[9px] text-text-secondary space-y-2 w-full">
                  <div>&gt; SSL/TLS HANDSHAKE: <span className="text-success font-bold">COMPLETED</span></div>
                  <div>&gt; PGP SIGNATURE EMBED: <span className="text-success font-bold">ACTIVE</span></div>
                  <div>&gt; TELEMETRY ROUTER: <span className="text-text-primary font-bold">NODE_INDO_GL_28</span></div>
                  <div className="border-t border-gold-accent/10 pt-2 truncate">
                    &gt; DETAILED PAYLOAD: {JSON.stringify(formData).slice(0, 75)}...
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 border border-gold-accent text-gold-accent text-xs font-bold uppercase tracking-widest hover:bg-gold-accent/10 transition-colors rounded-sm cursor-pointer"
                >
                  OPEN NEW SECURE CHANNEL
                </button>
              </div>
            ) : (
              /* Core Interactive Contact Forms */
              <div className="space-y-6 flex-grow flex flex-col justify-between">
                
                {/* Form Tabs Selector */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row border border-gold-accent/10 rounded-sm overflow-hidden font-mono text-[10px] w-full bg-bg-primary/50">
                    <button
                      type="button"
                      onClick={() => setActiveForm("BRIEFING")}
                      className={`flex-1 py-3 text-center transition-colors uppercase font-bold border-b sm:border-b-0 sm:border-r border-gold-accent/10 cursor-pointer ${
                        activeForm === "BRIEFING"
                          ? "bg-gold-accent text-bg-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      Request Briefing
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setActiveForm("CORPORATE")}
                      className={`flex-1 py-3 text-center transition-colors uppercase font-bold border-b sm:border-b-0 sm:border-r border-gold-accent/10 cursor-pointer ${
                        activeForm === "CORPORATE"
                          ? "bg-gold-accent text-bg-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      Corporate Inquiry
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setActiveForm("MEDIA")}
                      className={`flex-1 py-3 text-center transition-colors uppercase font-bold cursor-pointer ${
                        activeForm === "MEDIA"
                          ? "bg-gold-accent text-bg-primary"
                          : "text-text-secondary hover:text-text-primary"
                      }`}
                    >
                      Media Inquiry
                    </button>
                  </div>

                  {/* Form Description HUD block */}
                  <div className="font-mono text-[9px] text-text-secondary bg-bg-secondary/40 border border-gold-accent/10 p-3 rounded-sm flex items-start gap-2.5">
                    <ShieldAlert className="h-4 w-4 text-gold-accent flex-shrink-0" />
                    <div>
                      {activeForm === "BRIEFING" && (
                        <span>
                          REQUEST BRIEFING: Securely request custom strategic research briefings for corporate directors, sovereign agencies, or geopolitical advisory panels.
                        </span>
                      )}
                      {activeForm === "CORPORATE" && (
                        <span>
                          CORPORATE INQUIRY: Set up continuous threat-matrix API streams, secure narrative tracking feeds, and enterprise-grade intelligence platform access accounts.
                        </span>
                      )}
                      {activeForm === "MEDIA" && (
                        <span>
                          MEDIA INQUIRY: Secure verified quotes, expert geopolitical commentary, narrative tracking charts, and satellite vector imagery for publications.
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-4 font-mono text-[10px] flex-grow">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-[9px] text-text-secondary uppercase">
                        REPRESENTATIVE NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="ENTER NAME..."
                        className="w-full px-3 py-2 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="organization" className="text-[9px] text-text-secondary uppercase">
                        ORGANIZATION / ENTITY *
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        required
                        value={formData.organization}
                        onChange={handleInputChange}
                        placeholder="ENTER CORPORATION / INSTITUTION..."
                        className="w-full px-3 py-2 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-[9px] text-text-secondary uppercase">
                        SECURE CONTACT EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="EMAIL@DOMAIN.COM..."
                        className="w-full px-3 py-2 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="clearanceLevel" className="text-[9px] text-text-secondary uppercase">
                        REQUESTED ACCESS PROTOCOL
                      </label>
                      <select
                        id="clearanceLevel"
                        name="clearanceLevel"
                        value={formData.clearanceLevel}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-bg-primary border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm appearance-none cursor-pointer"
                      >
                        <option value="LEVEL_1" className="bg-bg-primary text-text-primary">LEVEL 1 - UNCLASSIFIED PUBLIC BRIEFING</option>
                        <option value="LEVEL_2" className="bg-bg-primary text-text-primary">LEVEL 2 - CONFIDENTIAL ENTERPRISE MONITOR</option>
                        <option value="LEVEL_3" className="bg-bg-primary text-text-primary">LEVEL 3 - CRITICAL SECURITY PROTOCOLS</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="purpose" className="text-[9px] text-text-secondary uppercase">
                      INQUIRY SUBJECT / PRIMARY TOPIC
                    </label>
                    <input
                      type="text"
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      placeholder="E.G. SOUTH ASIA REGIONAL STABILITY ACCORD..."
                      className="w-full px-3 py-2 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm text-[10.5px]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="details" className="text-[9px] text-text-secondary uppercase">
                      SECURE INQUIRY DETAILS (COMMUNICATION PAYLOAD) *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="ENTER DETAILED DISPATCH SPECIFICATIONS..."
                      className="w-full px-3 py-2 bg-bg-primary/80 border border-gold-accent/15 text-text-primary focus:outline-none focus:border-gold-accent rounded-sm font-sans text-[11.5px]"
                    ></textarea>
                  </div>

                  {/* Form Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gold-accent hover:bg-white text-bg-primary text-xs font-bold uppercase tracking-widest font-mono rounded-sm transition-colors flex items-center justify-center gap-2 shadow-[0_0_12px_rgba(212,175,55,0.25)] cursor-pointer"
                    >
                      <Send className="h-4 w-4" />
                      <span>DISPATCH SECURE TRANSMISSION</span>
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* Bottom Form Hud */}
            <div className="border-t border-gold-accent/10 pt-3 font-mono text-[8px] text-text-secondary/60 flex justify-between">
              <span>// OPERATIONAL PORT: INCOMING_SECURE_92</span>
              <span>TLS 1.3 SYMMETRIC ENCRYPTION ACTIVE</span>
            </div>

          </div>
        </div>

        {/* Secure Telemetry Sidebar (Right) */}
        <div className="lg:col-span-4 flex flex-col h-full space-y-6">
          
          {/* PGP Keys Card */}
          <TerminalCard subtitle="ENCRYPTION AUDIT" title="PGP Key Block" classification="SECURE ACCESS">
            <div className="space-y-4 font-mono text-[9px]">
              <div className="flex items-center gap-2 text-text-primary font-bold border-b border-gold-accent/10 pb-2">
                <Key className="h-4 w-4 text-gold-accent" />
                <span>GREY LOCK PGP SIGNATURE</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                For sensitive dispatches containing high-classification indicators or corporate asset lists, PGP-encrypt your communication before routing.
              </p>
              
              {/* Fake Key block code overlay */}
              <div className="bg-bg-secondary border border-gold-accent/15 p-3 rounded-sm text-[8px] text-text-secondary overflow-x-auto leading-snug select-all">
                <div>-----BEGIN PGP PUBLIC KEY BLOCK-----</div>
                <div>Version: GnuPG v2.4.0 (GNU/Linux)</div>
                <br />
                <div>mQINBF+dO88BEAC6hK7wK8U3WpL/z3Dq5qYJb5YJ3hWz2Q</div>
                <div>nZlWf389D3+uHJDm3nLw8wI4Y3z7L+P1Kk2Wz7h3VnZlW</div>
                <div>R89+uK7wK8U3WpL/zdHJDm3nLw8wI4Y3z7L+P1Kk2Wz7h3</div>
                <div>W3nLw8wI4Y3z7L+P1Kk2Wz7h3VnZlWR89+uK7wK8U3WpL</div>
                <div>-----END PGP PUBLIC KEY BLOCK-----</div>
              </div>
              
              <div className="text-[8px] text-gold-muted/80 uppercase">
                FINGERPRINT: F089 A11C 920E 38DF 0092 11E8 B89A C221 D4AF 37C2
              </div>
            </div>
          </TerminalCard>

          {/* Secure channels summary */}
          <TerminalCard subtitle="MONITOR SPECIFICATIONS" title="Secure Latency Monitor" classification="TELEMETRY SCAN">
            <div className="space-y-4 font-mono text-[9px] text-text-secondary">
              <div className="flex items-center gap-2 text-text-primary font-bold border-b border-gold-accent/10 pb-2">
                <Lock className="h-4 w-4 text-gold-accent animate-pulse-slow" />
                <span>ROUTING TELEMETRY STATUS</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-gold-accent/10 pb-1">
                  <span>INCOMING TUNNEL:</span>
                  <span className="text-success font-semibold flex items-center gap-1">
                    <Radio className="h-3 w-3 text-success animate-pulse" />
                    SECURE_ACTIVE
                  </span>
                </div>
                
                <div className="flex justify-between items-center border-b border-gold-accent/10 pb-1">
                  <span>SSL HANDSHAKE CIPHER:</span>
                  <span className="text-text-primary font-semibold">AES_256_GCM_SHA384</span>
                </div>

                <div className="flex justify-between items-center border-b border-gold-accent/10 pb-1">
                  <span>SYS CLOCK OFFSET:</span>
                  <span className="text-text-primary font-semibold">0.00012 SEC</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>REGIONAL MONITOR HUB:</span>
                  <span className="text-gold-accent font-semibold">GL-SOUTHASIA-01</span>
                </div>
              </div>

              <p className="text-[8px] text-text-secondary/60 leading-normal">
                DISCLAIMER: Submitting inquiries commits communications metadata logs to our secure private indexes. These are subject to zero external subpoenas or third-party audits.
              </p>
            </div>
          </TerminalCard>

        </div>

      </div>

    </div>
  );
}
