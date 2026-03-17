"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Atendimento AccessIT", href: "/atendimento" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Por que a AccessIT?", href: "/#por-que-accessit" },
];

const WHATSAPP_URL = "https://wa.me/554891788492";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logos/logo-accessit.png"
              alt="AccessIT — Conectando Soluções"
              width={180}
              height={43}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#4d4d4d] hover:text-[#0072ae] transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-[#ff7a33] text-[#ff7a33] font-semibold text-sm hover:bg-[#ff7a33] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            Fale com o Especialista!
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-[#4d4d4d] hover:text-[#0072ae]"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#4d4d4d] hover:text-[#0072ae] hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 mx-3 text-center px-5 py-2.5 rounded-full border-2 border-[#ff7a33] text-[#ff7a33] font-semibold text-sm hover:bg-[#ff7a33] hover:text-white transition-all duration-200"
            >
              Fale com o Especialista!
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
