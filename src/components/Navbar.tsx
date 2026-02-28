"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#services", label: "What I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#interests", label: "Interests" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();

  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const hero = document.getElementById("home");
      if (hero) {
        setPastHero(window.scrollY > hero.offsetHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="animate-fade-down border-b border-border sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 sm:px-12 py-7">
        {/* Logo + Headshot */}
        <a href="#home" className="flex items-center gap-3 font-editorial text-xl sm:text-[22px] font-black tracking-tight">
          <div className={`rounded-full overflow-hidden relative transition-all duration-500 ${
            pastHero ? "w-8 h-8 opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-0"
          }`}>
            <Image
              src="/headshot2.jpg"
              alt="Prathmesh Surnis"
              fill
              className="object-cover object-top"
            />
          </div><span>Prathmesh<span className="text-primary">.AI</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link-editorial text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "text-foreground active" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-6 py-4 space-y-1">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  mobileOpen ? "animate-slide-down" : ""
                } ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
                style={{ animationDelay: mobileOpen ? `${index * 50}ms` : "0ms" }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
