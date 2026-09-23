import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#010401] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Centered Logo */}
        <div className="flex justify-center mb-20">
          <Link href="/">
            <div className="relative w-48 h-24">
              <Image 
                src="/logo-platformslist.png" 
                alt="Platforms List Logo" 
                fill
                className="object-contain opacity-50" 
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-24 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.2em] mb-8 text-[11px] flex items-center gap-2">
              <span className="w-4 h-[1px] bg-emerald-400" /> DIVULGAÇÃO DE AFILIAÇÃO
            </h4>
            <p className="text-gray-500 text-[10px] leading-loose font-bold tracking-widest uppercase">
              O Platforms List opera como um comparador independente. Podem ser recebidas remunerações de afiliados dos operadores aqui mencionados. Estas parcerias podem influenciar a classificação das marcas, sem, no entanto, alterar a neutralidade das nossas avaliações baseadas em testes reais.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Conteúdo Publicitário</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-4xl mx-auto">
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-10 text-[11px]">Navegação</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Início</Link></li>
              <li><Link href="#brands" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Marcas</Link></li>
              <li><Link href="#guide" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Guia</Link></li>
              <li><Link href="#about" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Sobre</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] mb-10 text-[11px]">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Privacidade</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Termos</Link></li>
              <li><Link href="/cookies" className="text-gray-500 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Compliance Logos */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <Link href="https://www.srij.turismodeportugal.pt/pt" target="_blank">
            <Image src="/srij.webp" alt="SRIJ" width={60} height={30} className="object-contain" />
          </Link>
          <Link href="https://www.gamcare.org.uk/" target="_blank">
            <Image src="/gamcare.png" alt="GamCare" width={80} height={30} className="object-contain" />
          </Link>
          <Link href="https://www.gambleaware.org/" target="_blank">
            <Image src="/begambleaware.webp" alt="BeGambleAware" width={120} height={30} className="object-contain" />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="text-center border-t border-white/5 pt-10">
          <p className="text-gray-700 text-[9px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} platformslist.com • Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
