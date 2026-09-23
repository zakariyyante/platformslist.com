export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6 bg-[#020205]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">
            NOSSO SISTEMA <span className="tech-gradient-text">DE ANÁLISE</span>
          </h2>
          <div className="h-1 w-24 bg-emerald-400 mx-auto mb-8 shadow-[0_0_10px_var(--primary)]" />
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            Aplicamos um protocolo de classificação preciso baseado em mais de 50 critérios de seleção para garantir uma experiência ideal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Excellence Analytique */}
          <div className="glass-morphism cyber-border p-10 rounded-sm">
            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tight flex items-center gap-4">
              <span className="text-emerald-400">01.</span> AUDITORIA DE DESEMPENHO
            </h3>
            <ul className="space-y-6">
              {[
                "Estudos detalhados realizados por especialistas do mercado",
                "Controlo permanente de bónus e ofertas promocionais",
                "Verificação rigorosa de prazos e métodos de pagamento",
                "Auditoria de segurança e conformidade com o quadro regulamentar da SRIJ",
                "Protocolo de pontuação proprietário Platforms List"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="text-emerald-400 mt-1 font-bold">✦</span>
                  <span className="text-gray-300 font-medium text-sm uppercase tracking-wide leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Utilisation Responsable */}
          <div className="glass-morphism cyber-border p-10 rounded-sm border-l-emerald-500/50">
            <h3 className="text-2xl font-black mb-8 text-white uppercase tracking-tight flex items-center gap-4">
              <span className="text-emerald-400">02.</span> UTILIZAÇÃO RESPONSÁVEL
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              A segurança dos nossos utilizadores é a nossa prioridade absoluta. Promovemos apenas plataformas que respeitam as normas de segurança e utilização responsável.
            </p>
            <div className="space-y-6">
              <a 
                href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/servicos-de-apoio-ao-jogador" 
                target="_blank" 
                className="flex items-center justify-between p-5 glass-morphism border border-white/5 hover:border-emerald-400/50 transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-widest mb-1">Ajuda Imediata</span>
                  <span className="font-bold text-white text-lg tracking-tighter">1414</span>
                </div>
                <span className="text-emerald-400 font-black text-sm group-hover:translate-x-2 transition-transform uppercase tracking-widest">LINHA AJUDA →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
