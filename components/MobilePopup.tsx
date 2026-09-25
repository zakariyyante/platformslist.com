"use client";

import { useEffect, useState } from "react";
import { Brand, brands } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Link from "next/link";
import Image from "next/image";

interface MobilePopupProps {
  gclid?: string;
}

export default function MobilePopup({ gclid }: MobilePopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileBrands = brands.filter(b => b.isMobile);

  useEffect(() => {
    if (gclid && gclid.length > 30 && mobileBrands.length > 0) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpen(false);
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [gclid, mobileBrands.length]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto animate-in fade-in duration-500"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      style={{
        background: 'linear-gradient(to right, #006600 40%, #ff0000 40%)'
      }}
    >
      <div className="min-h-screen flex flex-col bg-black/40 backdrop-blur-[1px]">
        {/* Modal Header */}
        <div className="sticky top-0 z-[110] bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="relative w-40 h-10">
            <Image 
              src="/logo-platformslist.png" 
              alt="Platforms List Logo" 
              fill 
              className="object-contain object-left scale-150 origin-left" 
              priority
              sizes="128px"
            />
          </div>
          
          {/* Burger Menu Mock */}
          <button className="text-white p-2" aria-label="Menu Principal">
            <div className="w-5 h-4 flex flex-col justify-between items-end">
              <span className="h-0.5 w-5 bg-blue-500 rounded-full" />
              <span className="h-0.5 w-3 bg-blue-500 rounded-full" />
              <span className="h-0.5 w-5 bg-blue-500 rounded-full" />
            </div>
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-grow">
          <section className="pt-6 pb-4 px-6 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-black/40 border border-blue-500/40 backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-400">
                EXCLUSIVO MÓVEL
              </span>
            </div>
            <h2 id="modal-title" className="text-2xl font-black mb-3 uppercase tracking-tight leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              AS MELHORES <span className="text-blue-400">OFERTAS DO DIA</span>
            </h2>
            <p className="text-white text-[11px] max-w-sm mx-auto font-bold mb-6 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-4">
              Novas ofertas, levantamentos rápidos e as melhores plataformas selecionadas para si, com bónus exclusivos otimizados para o seu smartphone.
            </p>

            {/* Floating Trust Badges - Infinite Marquee */}
            <div className="relative w-full overflow-hidden pb-1 pt-0.5 mb-8">
              <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, listIdx) => (
                  <div key={listIdx} className="flex gap-2.5 px-1.25">
                    {[
                      { isFlag: true, text: 'Portugal', color: 'bg-[#0a0a0f] border-blue-500/50 text-blue-400' },
                      { type: 'icon', icon: 'bitcoin', text: 'Crypto Pay', color: 'bg-[#0a0a0f] border-orange-500/50 text-orange-400' },
                      { type: 'icon', icon: 'bank', text: 'Transferência', color: 'bg-[#0a0a0f] border-blue-500/50 text-blue-400' },
                      { type: 'icon', icon: 'shield', text: 'Levantamentos Rápidos', color: 'bg-[#0a0a0f] border-blue-800/50 text-blue-400' },
                      { type: 'icon', icon: 'lock', text: 'Segurança SSL', color: 'bg-[#0a0a0f] border-blue-500/50 text-blue-400' },
                      { icon: 'shield-exclamation', text: '18+', color: 'bg-[#0a0a0f] border-red-900/50 text-red-500' },
                      { icon: 'badge-check', text: 'Licença SRIJ', color: 'bg-[#0a0a0f] border-blue-500/30 text-blue-400' },
                      { type: 'icon', icon: 'support', text: 'Suporte 24/7', color: 'bg-[#0a0a0f] border-slate-800 text-slate-400' }
                    ].map((badge: any, i) => (
                      <div 
                        key={`${listIdx}-${i}`} 
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border whitespace-nowrap ${badge.color}`}
                      >
                        {badge.isFlag && (
                          <div className="w-5 h-3.5 rounded-sm overflow-hidden border border-blue-400 flex shrink-0">
                            <div className="flex-[2] bg-[#006600]"></div>
                            <div className="flex-[3] bg-[#ff0000]"></div>
                          </div>
                        )}
                        {badge.type === 'icon' && badge.icon === 'bitcoin' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.474-1.24 14.914.36c6.421 1.593 10.346 8.116 8.724 14.544zM17.415 10.89c.287-1.92-1.747-2.956-4.723-3.645l.966-3.874-2.357-.59-.941 3.77c-.62-.153-1.255-.3-1.886-.44l.948-3.8-2.356-.587-.966 3.874c-.512-.117-1.016-.23-1.508-.347l.002-.012-3.25-.812-.627 2.515s1.75.4 1.712.424c.955.239 1.13.872 1.1 1.374l-.999 4.007c.06.015.138.035.223.057l-.224-.056-1.4 5.61c-.117.293-.413.733-1.08.565.024.034-1.713-.427-1.713-.427l-1.17 2.69 3.067.766c.57.143 1.13.29 1.677.427l-.973 3.915 2.358.588.966-3.875c.644.175 1.265.343 1.877.49l-.963 3.866 2.356.588.973-3.903c4.017.76 7.037.454 8.31-3.177 1.027-2.923-.05-4.608-2.17-5.714 1.543-.356 2.703-1.37 3.011-3.46zm-5.38 5.617c-.728 2.925-5.656 1.344-7.253.945l1.293-5.187c1.597.399 6.702 1.189 5.96 4.242zm1.18-5.648c-.663 2.662-4.767 1.31-6.101.977l1.173-4.704c1.335.334 5.603.959 4.928 3.727z"/>
                          </svg>
                        )}
                        {badge.type === 'icon' && badge.icon === 'bank' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M7 10v11M17 10v11M12 3L2 10h20L12 3z"/>
                          </svg>
                        )}
                        {badge.type === 'icon' && badge.icon === 'lock' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                          </svg>
                        )}
                        {badge.type === 'icon' && badge.icon === 'shield' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          </svg>
                        )}
                        {badge.type === 'icon' && badge.icon === 'support' && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                        )}
                        <span className="text-[9px] font-black uppercase tracking-widest">{badge.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="px-3 pb-8">
            <div className="grid grid-cols-1 gap-3 mb-10">
              {mobileBrands.map((brand, index) => (
                <BrandCard 
                  key={brand.id} 
                  brand={brand} 
                  gclidValue={gclid} 
                  rank={index + 1} 
                  variant="modal"
                  priority={index === 0}
                />
              ))}
            </div>

            {/* Compliance in Modal */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
              <div className="flex justify-center items-center gap-6 mb-8 opacity-30 grayscale">
                <Link href="https://www.srij.turismodeportugal.pt/pt" target="_blank" className="relative w-16 h-8">
                  <Image src="/srij.webp" alt="SRIJ" fill className="object-contain" />
                </Link>
                <Link href="https://www.icad.pt/" target="_blank" className="relative w-16 h-8">
                  <Image src="/icad.webp" alt="ICAD" fill className="object-contain" />
                </Link>
                <Link href="https://www.gambleaware.org/" target="_blank" className="relative w-24 h-8">
                  <Image src="/begambleaware.webp" alt="Responsabilidade" fill className="object-contain" />
                </Link>
              </div>
              <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">
                O jogo deve continuar a ser um prazer. <br />
                Ligue 1414 para obter ajuda. <br />
                Todos os links direcionam para operadores licenciados em Portugal.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-black/40 p-6 border-t border-white/5 text-center mt-auto">
          <div className="text-[8px] text-white/10 uppercase tracking-[0.4em] font-black">
            © 2026 PLATFORMSLIST.COM
          </div>
        </div>
      </div>
    </div>
  );
}
