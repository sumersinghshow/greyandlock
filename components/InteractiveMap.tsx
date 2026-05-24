"use client";

import React, { useState } from "react";
import { Info, AlertTriangle, ShieldCheck, MapPin, Radio } from "lucide-react";

interface ThreatNode {
  id: string;
  name: string;
  lat: number; // custom SVG X coord
  lng: number; // custom SVG Y coord
  riskScore: number;
  status: string;
  trend: "UP" | "DOWN" | "STABLE";
  details: string;
  incidents: string[];
  color: string;
}

export default function InteractiveMap() {
  const [activeNode, setActiveNode] = useState<ThreatNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<ThreatNode | null>(null);

  // High-fidelity Mock Geopolitical Risk Nodes (mapped to SVG coordinate space 800x400)
  const riskNodes: ThreatNode[] = [
    {
      id: "india",
      name: "India",
      lat: 530,
      lng: 195,
      riskScore: 48,
      status: "ACTIVE SCAN",
      trend: "STABLE",
      details: "Northern border monitoring and Indo-Pacific supply-chain cybersecurity assessments.",
      incidents: ["Narrative interference detected in regional news outlets", "Cross-border communications surveillance active"],
      color: "text-warning",
    },
    {
      id: "china",
      name: "China",
      lat: 590,
      lng: 160,
      riskScore: 82,
      status: "INFO CAMPAIGN",
      trend: "UP",
      details: "Elevated influence operations, maritime posture in South China Sea, and semiconductor supply coercion.",
      incidents: ["Narrative push on economic decoupling risks", "High-frequency cyber scans against industrial nodes"],
      color: "text-danger",
    },
    {
      id: "pakistan",
      name: "Pakistan",
      lat: 505,
      lng: 185,
      riskScore: 76,
      status: "BORDER ESCALATION",
      trend: "UP",
      details: "Increased paramilitary posture along frontier zones and heightened cyber intelligence activity.",
      incidents: ["Border communications interception spike", "Militant narrative amplification on social feeds"],
      color: "text-danger",
    },
    {
      id: "russia",
      name: "Russia",
      lat: 520,
      lng: 100,
      riskScore: 88,
      status: "COGNITIVE WARFARE",
      trend: "STABLE",
      details: "Disinformation distribution channels targeting Baltic and South Asian supply networks.",
      incidents: ["Fake energy-hub supply guarantees distributed", "State-aligned proxy outlet narrative push"],
      color: "text-danger",
    },
    {
      id: "usa",
      name: "United States",
      lat: 220,
      lng: 155,
      riskScore: 35,
      status: "POLICY ALIGNMENT",
      trend: "DOWN",
      details: "Strategic partnership reassessments and advanced defense technology transfer security audits.",
      incidents: ["Bilateral technology sharing directives approved", "Supply chain security executive order review"],
      color: "text-success",
    },
    {
      id: "iran",
      name: "Iran",
      lat: 460,
      lng: 175,
      riskScore: 78,
      status: "MARITIME COERCION",
      trend: "UP",
      details: "Naval drills and maritime choke-point electronic warfare signals detected in Gulf of Oman.",
      incidents: ["GPS spoofing warnings in Hormuz transit routes", "Drone reconnaissance flight logs recorded"],
      color: "text-danger",
    },
    {
      id: "bangladesh",
      name: "Bangladesh",
      lat: 548,
      lng: 198,
      riskScore: 54,
      status: "CIVIL SECURITY",
      trend: "STABLE",
      details: "Infrastructure cyber-hardening audits and border transition trade monitors.",
      incidents: ["Digital banking core system security upgrade", "Port container routing disruptions reported"],
      color: "text-warning",
    },
    {
      id: "myanmar",
      name: "Myanmar",
      lat: 565,
      lng: 205,
      riskScore: 72,
      status: "MILITARY INSTABILITY",
      trend: "UP",
      details: "Border instability impacting neighboring transit routes and digital asset smuggling rings.",
      incidents: ["Rebel communications encrypted signals surge", "Transit pipeline security posture elevated"],
      color: "text-danger",
    },
  ];

  const getRiskColor = (score: number) => {
    if (score < 40) return "#18C964"; // green
    if (score < 60) return "#F5A524"; // orange
    return "#F31260"; // red
  };

  return (
    <div className="relative w-full overflow-hidden bg-bg-secondary/40 border border-gold-accent/15 rounded-sm p-4 select-none">
      
      {/* Map Header Status Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-white/5 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-danger animate-ping"></div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
            <Radio className="h-3 w-3 text-danger" />
            LIVE OSINT RISK HEATMAP
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4 font-mono text-[9px] text-text-secondary">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#18C964]"></span>
            <span>LOW (&lt;40)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#F5A524]"></span>
            <span>ELEVATED (40-60)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#F31260]"></span>
            <span>HIGH (&gt;60)</span>
          </div>
          <span className="border-l border-white/10 pl-4 uppercase">GRID REF: GL-5089</span>
        </div>
      </div>

      <div className="relative w-full aspect-[2/1] min-h-[300px] border border-white/5 bg-bg-primary/50 overflow-hidden rounded-sm">
        
        {/* Animated Radar Scanning Sweep Line */}
        <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-gold-accent/25 to-transparent animate-scanline pointer-events-none left-1/2"></div>
        
        {/* Decorative Grid coordinates */}
        <div className="absolute inset-0 pointer-events-none font-mono text-[7px] text-gold-accent/10 flex flex-col justify-between p-1">
          <div className="flex justify-between">
            <span>[SYS_MONITOR_ON]</span>
            <span>LAT: 28.6139° N</span>
            <span>LNG: 77.2090° E</span>
          </div>
          <div className="flex justify-between">
            <span>CONFIDENCE LEVEL: HIGH (89%)</span>
            <span>SCAN RATE: 4.8 Hz</span>
            <span>OPERATIONAL PORTAL: ACTIVE</span>
          </div>
        </div>

        {/* SVG World Map outlines */}
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-60">
          
          {/* Decorative Grid Lines inside SVG */}
          <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(212, 175, 55, 0.05)" strokeDasharray="5,5" />
          <line x1="0" y1="200" x2="800" y2="200" stroke="rgba(212, 175, 55, 0.08)" />
          <line x1="0" y1="300" x2="800" y2="300" stroke="rgba(212, 175, 55, 0.05)" strokeDasharray="5,5" />
          
          <line x1="200" y1="0" x2="200" y2="400" stroke="rgba(212, 175, 55, 0.05)" strokeDasharray="5,5" />
          <line x1="400" y1="0" x2="400" y2="400" stroke="rgba(212, 175, 55, 0.08)" />
          <line x1="600" y1="0" x2="600" y2="400" stroke="rgba(212, 175, 55, 0.05)" strokeDasharray="5,5" />

          {/* Continent simplified vectors */}
          {/* North America */}
          <path
            d="M 80 80 L 150 70 L 250 80 L 280 140 L 220 180 L 200 160 L 170 200 L 190 240 L 150 250 L 140 200 L 100 150 Z"
            fill="rgba(18, 23, 34, 0.9)"
            stroke="rgba(212, 175, 55, 0.2)"
            strokeWidth="1"
          />
          {/* South America */}
          <path
            d="M 190 240 L 240 250 L 270 290 L 250 350 L 220 380 L 200 320 Z"
            fill="rgba(18, 23, 34, 0.9)"
            stroke="rgba(212, 175, 55, 0.15)"
            strokeWidth="1"
          />
          {/* Africa */}
          <path
            d="M 360 170 L 410 160 L 450 180 L 470 210 L 450 260 L 420 310 L 390 320 L 370 240 L 350 200 Z"
            fill="rgba(18, 23, 34, 0.9)"
            stroke="rgba(212, 175, 55, 0.15)"
            strokeWidth="1"
          />
          {/* Europe & Asia */}
          <path
            d="M 350 100 L 420 80 L 520 60 L 680 70 L 730 110 L 700 160 L 670 140 L 640 220 L 580 240 L 560 210 L 500 210 L 460 220 L 440 180 L 370 140 Z"
            fill="rgba(18, 23, 34, 0.9)"
            stroke="rgba(212, 175, 55, 0.25)"
            strokeWidth="1"
          />
          {/* Australia */}
          <path
            d="M 640 270 L 690 280 L 700 320 L 660 330 L 620 300 Z"
            fill="rgba(18, 23, 34, 0.9)"
            stroke="rgba(212, 175, 55, 0.15)"
            strokeWidth="1"
          />

          {/* Interactive Threat Pulse Rings & Circles */}
          {riskNodes.map((node) => {
            const isHovered = hoveredNode?.id === node.id;
            const isActive = activeNode?.id === node.id;
            const nodeColor = getRiskColor(node.riskScore);

            return (
              <g
                key={node.id}
                className="cursor-pointer group"
                onClick={() => setActiveNode(isActive ? null : node)}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Outer Expanding Radar Ring */}
                <circle
                  cx={node.lat}
                  cy={node.lng}
                  r={isHovered || isActive ? "20" : "12"}
                  fill="none"
                  stroke={nodeColor}
                  strokeWidth="1.5"
                  className="animate-radar-pulse origin-center"
                  style={{
                    transformOrigin: `${node.lat}px ${node.lng}px`,
                  }}
                />

                {/* Inner Glow Ring */}
                <circle
                  cx={node.lat}
                  cy={node.lng}
                  r="6"
                  fill={nodeColor}
                  fillOpacity="0.25"
                  stroke={nodeColor}
                  strokeWidth="1"
                  className="group-hover:scale-125 transition-transform duration-300 origin-center"
                  style={{
                    transformOrigin: `${node.lat}px ${node.lng}px`,
                  }}
                />

                {/* Core Data Node Point */}
                <circle
                  cx={node.lat}
                  cy={node.lng}
                  r="3.5"
                  fill={nodeColor}
                  className="group-hover:fill-white transition-colors"
                />

                {/* Small indicator ticks on active nodes */}
                {(isHovered || isActive) && (
                  <path
                    d={`M ${node.lat - 8} ${node.lng} L ${node.lat + 8} ${node.lng} M ${node.lat} ${node.lng - 8} L ${node.lat} ${node.lng + 8}`}
                    stroke={nodeColor}
                    strokeWidth="0.5"
                    strokeOpacity="0.7"
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Overlay (absolute relative to SVG frame) */}
        {hoveredNode && !activeNode && (
          <div
            className="absolute z-20 glass-panel-glow border border-gold-accent p-3 rounded-sm w-56 font-mono text-[10px] pointer-events-none"
            style={{
              left: `${Math.min(hoveredNode.lat / 8 + 2, 70)}%`,
              top: `${Math.min(hoveredNode.lng / 4 + 4, 60)}%`,
            }}
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-1 mb-1.5">
              <span className="font-bold text-white uppercase">{hoveredNode.name}</span>
              <span
                className="font-bold"
                style={{ color: getRiskColor(hoveredNode.riskScore) }}
              >
                RISK: {hoveredNode.riskScore}
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] mb-1">
              <span>STATUS:</span>
              <span className="text-gold-accent font-semibold">{hoveredNode.status}</span>
            </div>
            <p className="text-text-secondary leading-relaxed text-[9px]">
              {hoveredNode.details.slice(0, 70)}...
            </p>
            <div className="mt-1.5 pt-1.5 border-t border-white/5 text-[8px] text-text-secondary italic">
              Click node for deep analysis
            </div>
          </div>
        )}

        {/* Active Node Detail Card Overlay (Bottom left) */}
        {activeNode && (
          <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-30 glass-panel-glow border border-gold-accent p-4 rounded-sm sm:w-80 font-mono text-[11px] animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2.5">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-gold-accent" />
                <span className="font-bold text-white uppercase text-xs">{activeNode.name}</span>
              </div>
              <button
                onClick={() => setActiveNode(null)}
                className="text-text-secondary hover:text-white text-xs px-1"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-bg-primary/50 border border-white/5 p-2 rounded-sm">
                <span className="text-[9px] text-text-secondary block">RISK COEFFICIENT</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: getRiskColor(activeNode.riskScore) }}
                >
                  {activeNode.riskScore}%
                </span>
              </div>
              <div className="bg-bg-primary/50 border border-white/5 p-2 rounded-sm">
                <span className="text-[9px] text-text-secondary block">TREND SIGNAL</span>
                <span className="text-white text-xs font-semibold flex items-center gap-1 mt-1">
                  {activeNode.trend === "UP" ? (
                    <span className="text-danger">▲ ESCALATION</span>
                  ) : activeNode.trend === "DOWN" ? (
                    <span className="text-success">▼ MITIGATING</span>
                  ) : (
                    <span className="text-warning">■ STABLE</span>
                  )}
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div>
                <span className="text-[9px] text-text-secondary block">OPERATION STATUS</span>
                <span className="text-gold-accent font-semibold text-xs tracking-wider">{activeNode.status}</span>
              </div>
              <div>
                <span className="text-[9px] text-text-secondary block">STRATEGIC BRIEF</span>
                <p className="text-text-secondary text-[10px] leading-relaxed mt-0.5">{activeNode.details}</p>
              </div>
            </div>

            {activeNode.incidents.length > 0 && (
              <div className="border-t border-white/5 pt-2">
                <span className="text-[9px] text-text-secondary block mb-1">INTERCEPTED SIGNALS / EVENTS</span>
                <ul className="space-y-1">
                  {activeNode.incidents.map((incident, i) => (
                    <li key={i} className="text-[9px] text-white flex items-start gap-1">
                      <span className="text-gold-accent">•</span>
                      <span>{incident}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
