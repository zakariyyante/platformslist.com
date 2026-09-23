"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-[#020617]/95 backdrop-blur-sm border-b border-white/5">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="relative w-48 h-12">
              <Image 
                src="/logo-platformslist.png" 
                alt="Platforms List Logo" 
                fill
                className="object-contain object-left scale-125 origin-left" 
              />
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <div className="flex items-center justify-center w-8 h-8 rounded-full border border-red-600 bg-red-600 text-white text-[10px] font-bold">
              18+
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-xs font-bold text-white hover:text-blue-500 transition-colors tracking-widest uppercase">Início</Link>
              <Link href="#brands" className="text-xs font-bold text-white hover:text-blue-500 transition-colors tracking-widest uppercase">Classificação</Link>
              <Link href="#guide" className="text-xs font-bold text-white hover:text-blue-500 transition-colors tracking-widest uppercase">Critérios</Link>
              <Link href="#about" className="text-xs font-bold text-white hover:text-blue-500 transition-colors tracking-widest uppercase">Edição</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden sm:block px-4 py-1 text-[9px] font-bold uppercase tracking-widest border border-blue-500/50 text-blue-500 hover:bg-blue-500/10 transition-all rounded-full">
              Contacto
            </Link>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Advertising Disclosure Bar */}
        <div className="w-full bg-[#0f172a] py-1.5 border-b border-white/5">
          <div className="container mx-auto px-6 flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center text-[8px] text-gray-500 font-bold leading-none">i</div>
            <span className="text-[8px] text-gray-500 uppercase tracking-[0.2em] font-bold">
              INFORMAÇÃO COMERCIAL: GUIA GRATUITO APOIADO POR PARCERIAS DE AFILIADOS
            </span>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-[#020617] border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">INÍCIO</Link>
            <Link href="#brands" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">MARCAS</Link>
            <Link href="#guide" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">GUIDE</Link>
            <Link href="#about" onClick={() => setIsOpen(false)} className="text-sm font-bold text-white tracking-widest">SOBRE</Link>
            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-bold text-blue-500 tracking-widest">CONTACTO</Link>
          </div>
        )}
      </header>
    </>
  );
}
