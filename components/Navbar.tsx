"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, Menu, X, Radio, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Synchronizer
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Platform", path: "/platform" },
    { name: "Reports", path: "/reports" },
    { name: "Insights", path: "/insights" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-gold-accent/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="h-9 w-9 flex items-center justify-center border border-gold-accent bg-bg-secondary/80 rounded-sm relative overflow-hidden">
                <Shield className="h-5 w-5 text-gold-accent group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gold-accent/5 animate-pulse-slow"></div>
              </div>
              {/* Corner brackets on logo */}
              <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border-t border-l border-gold-accent/70"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border-b border-r border-gold-accent/70"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display uppercase tracking-widest text-text-primary leading-none">
                Grey Lock <span className="text-gold-accent">& Co.</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-gold-muted/80 uppercase mt-0.5 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 bg-success rounded-full animate-pulse"></span>
                GEOPOLITICAL INTELLIGENCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`px-4 py-1.5 text-xs font-medium uppercase tracking-widest transition-all duration-200 relative ${
                    isActive
                      ? "text-gold-accent font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-gold-accent shadow-[0_0_8px_#D4AF37]"></span>
                  )}
                  {/* Small cybernetic tick on hover */}
                  <span className="absolute top-0 right-2 w-1 h-1 rounded-full bg-gold-accent opacity-0 hover:opacity-100 transition-opacity"></span>
                </Link>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-bg-secondary/40 border border-white/10 rounded-sm font-mono text-[9.5px] text-text-secondary uppercase">
              <Radio className="h-3 w-3 text-red-500 animate-pulse" />
              <span>LIVE FEED ACTIVE</span>
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gold-accent/25 hover:border-gold-accent hover:bg-gold-accent/5 transition-all duration-200 rounded-sm text-gold-accent flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Toggle light/dark theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            
            <Link
              href="/contact?type=briefing"
              className="relative px-5 py-2 overflow-hidden border border-gold-accent text-gold-accent text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:text-text-primary hover:bg-gold-accent/10 active:scale-95 rounded-sm"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gold-accent"></div>
              <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-gold-accent"></div>
              <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-gold-accent"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gold-accent"></div>
              <span>Request Briefing</span>
            </Link>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex md:hidden items-center gap-2">
            
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 border border-gold-accent/25 text-gold-accent rounded-sm flex items-center justify-center active:scale-90"
              aria-label="Toggle light/dark theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-text-secondary hover:text-gold-accent focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-bg-primary/95 backdrop-blur-lg border-t border-gold-accent/10 px-4 py-6 flex flex-col justify-between animate-fade-in shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
          <div className="space-y-3 flex flex-col">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold uppercase tracking-widest border-b border-white/5 transition-colors ${
                    isActive ? "text-gold-accent bg-bg-secondary" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 bg-gold-accent rounded-full"></span>}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="space-y-4 pt-6">
            <div className="flex items-center justify-center gap-1.5 py-2 border border-white/5 bg-bg-secondary/40 font-mono text-xs text-text-secondary uppercase">
              <Radio className="h-3.5 w-3.5 text-red-500 animate-pulse" />
              <span>LIVE ALERTS ACTIVE</span>
            </div>
            
            <Link
              href="/contact?type=briefing"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center border border-gold-accent text-gold-accent text-xs font-bold uppercase tracking-widest hover:bg-gold-accent/10 rounded-sm"
            >
              Request Briefing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
