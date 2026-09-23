import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-3xl glass-morphism cyber-border p-10 md:p-16 rounded-sm">
          <h1 className="text-4xl md:text-6xl font-black mb-10 text-white uppercase tracking-tighter">
            Termos de <span className="tech-gradient-text">Acesso</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-slate-400 space-y-8 font-light">
            <p className="leading-relaxed">
              Bem-vindo ao portal <span className="text-emerald-400 font-bold uppercase tracking-widest text-xs">Platforms List</span>.
            </p>
            <p>
              Estes termos e condições descrevem as regras e regulamentos para a utilização do website do Platforms List, localizado em platformslist.com.
            </p>
            <p>
              Ao aceder a este website, assumimos que aceita estes termos e condições. Não continue a utilizar o Platforms List se não concordar em aceitar todos os termos e condições declarados nesta página.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Licença</h2>
            <p>
              Salvo indicação em contrário, o Platforms List e/ou os seus licenciadores detêm os direitos de propriedade intelectual de todo o material no Platforms List. Todos os direitos de propriedade intelectual são reservados. Pode aceder ao mesmo a partir do Platforms List para seu uso pessoal, sujeito às restrições definidas nestes termos e condições.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Não deve:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republicar material do Platforms List</li>
              <li>Vender, alugar ou sublicenciar material do Platforms List</li>
              <li>Reproduzir, duplicar ou copiar material do Platforms List</li>
              <li>Redistribuir conteúdo do Platforms List</li>
            </ul>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Isenção de Responsabilidade</h2>
            <p>
              Na medida máxima permitida pela lei aplicável, excluímos todas as representações, garantias e condições relativas ao nosso website e à utilização deste website. Nada nesta isenção de responsabilidade irá:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>limitar ou excluir a nossa ou a sua responsabilidade em caso de morte ou danos pessoais;</li>
              <li>limitar ou excluir a nossa ou a sua responsabilidade em caso de fraude ou falsidade ideológica;</li>
              <li>limitar qualquer uma das nossas ou das suas responsabilidades de uma forma que não seja permitida pela lei aplicável;</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
