import Link from "next/link";
import Image from "next/image";

export default function DisclaimerBar() {
  return (
    <section className="bg-[#0a070f] border-t border-white/5 py-12 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: 18+ and Warning */}
        <div className="flex flex-col md:flex-row items-center gap-6 max-w-xl">
          <div className="text-center md:text-left">
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">
              Atenção: Proibido a menores
            </h4>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider leading-relaxed">
              O acesso é estritamente reservado a adultos com 18 anos ou mais.
            </p>
          </div>
        </div>

        {/* Center: Risk Info */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-loose">
            O jogo acarreta riscos: endividamento, isolamento, dependência. Para obter ajuda, ligue para o <span className="text-white">1414</span> (chamada gratuita) ou visite a <Link href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/servicos-de-apoio-ao-jogador" className="text-blue-500 border-b border-blue-500/30">Linha Ajuda</Link>.
          </p>
        </div>

        {/* Right: Regulatory */}
        <div className="flex items-center justify-center gap-6 border border-white/10 p-4 rounded-xl min-w-[200px] grayscale opacity-50">
          <Link href="https://www.srij.turismodeportugal.pt/pt" target="_blank">
            <Image src="/srij.webp" alt="Regulado pela SRIJ" width={80} height={40} className="object-contain" />
          </Link>
          <Link href="https://www.gamcare.org.uk/" target="_blank">
            <Image src="/gamcare.png" alt="GamCare" width={80} height={40} className="object-contain" />
          </Link>
        </div>
      </div>
    </section>
  );
}
