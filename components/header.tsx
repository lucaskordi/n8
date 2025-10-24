"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { href: "#projeto", label: "Projeto" },
  { href: "#galeria", label: "Galeria" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#plantas", label: "Plantas" },
  { href: "#autoria", label: "Autoria" },
  { href: "#localizacao", label: "Localização" },
  { href: "#obras", label: "Obras" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 h-16 md:h-20 overflow-hidden max-w-full">
      <div
        className="absolute inset-0 backdrop-blur-sm transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to bottom, rgba(62, 13, 17, 0.9), rgba(62, 13, 17, 0.6), rgba(62, 13, 17, 0.3), rgba(62, 13, 17, 0.1), rgba(62, 13, 17, 0))",
        }}
      ></div>

      <div className="relative w-full px-4 md:px-[40px] max-w-full">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-4 md:space-x-12">
            <div className="flex items-center">
              <Image
                src="/logo_white.svg"
                alt="Verus Logo"
                width={160}
                height={52}
                className="h-8 md:h-10 w-auto"
              />
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mirante text-white font-normal relative group text-sm md:text-base"
              >
                {item.label}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-[#C2816B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
              </a>
            ))}
          </nav>

          <a
            href="http://wa.me/5541997188421?text=Vim%20do%20Site%20e%20Gostaria%20de%20Saber%20Mais%20sobre%20o%20Verus"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex bg-[#C2816B] items-center justify-center hover:bg-[#3E0D11] text-white font-mirante font-normal px-3 md:px-4 py-2 lg:py-3 rounded-full hover:scale-105 transition-all duration-300 text-sm lg:text-base"
          >
            Entrar em Contato
          </a>

          <button
            onClick={toggleMenu}
            className="lg:hidden w-10 h-10 bg-[#C2816B] rounded-full flex items-center justify-center hover:bg-[#3E0D11] transition-all duration-300 hover:scale-105 z-50"
            aria-label="Menu"
          >
            <div className="w-4 h-3 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleNavClick}
      ></div>

      <nav
        className={`fixed top-16 right-0 w-80 max-w-[85vw] h-[calc(100vh-4rem)] bg-gradient-to-b from-[#3E0D11] to-[#2A0A0C] shadow-2xl transition-all duration-500 ease-out lg:hidden z-40 ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex-1 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="font-mirante text-white font-normal text-lg hover:text-[#C2816B] transition-all duration-300 hover:translate-x-2 relative group"
                style={{
                  animation: isMenuOpen
                    ? `slideIn 0.4s ease-out ${index * 0.05}s both`
                    : "none",
                }}
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C2816B] group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>

          <a
            href="http://wa.me/5541997188421?text=Vim%20do%20Site%20e%20Gostaria%20de%20Saber%20Mais%20sobre%20o%20Verus"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="w-full bg-[#C2816B] flex items-center justify-center hover:bg-white hover:text-[#3E0D11] text-white font-mirante font-normal px-6 py-3 rounded-full transition-all duration-300 text-base hover:scale-105 shadow-lg"
            style={{
              animation: isMenuOpen
                ? `slideIn 0.4s ease-out ${navItems.length * 0.05}s both`
                : "none",
            }}
          >
            Entrar em Contato
          </a>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
