import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 px-4">
        <div className="container mx-auto max-w-3xl glass-morphism cyber-border p-10 md:p-16 rounded-sm">
          <h1 className="text-4xl md:text-6xl font-black mb-10 text-white uppercase tracking-tighter">
            Protocolo de <span className="tech-gradient-text">Privacidade</span>
          </h1>
          
          <div className="prose prose-invert max-w-none text-slate-400 space-y-8 font-light">
            <p className="leading-relaxed">
              No <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Platforms List</span>, acessível em platformslist.com, a proteção dos seus metadados e da sua privacidade está integrada por defeito na nossa arquitetura.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Ficheiros de Registo</h2>
            <p>
              O Platforms List segue um procedimento padrão de utilização de ficheiros de registo. Estes ficheiros registam os visitantes quando estes visitam websites. Todas as empresas de alojamento fazem-no e isso faz parte das análises dos serviços de alojamento. As informações recolhidas pelos ficheiros de registo incluem endereços de protocolo de Internet (IP), tipo de navegador, fornecedor de serviços de Internet (ISP), data e hora, páginas de referência/saída e, possivelmente, o número de cliques.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Cookies e Web Beacons</h2>
            <p>
              Como qualquer outro website, o Platforms List utiliza &quot;cookies&quot;. Estes cookies são utilizados para armazenar informações, incluindo as preferências dos visitantes e as páginas do website que o visitante acedeu ou visitou. As informações são utilizadas para otimizar a experiência dos utilizadores, personalizando o conteúdo da nossa página web com base no tipo de navegador dos visitantes e/ou noutras informações.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Políticas de Privacidade de Terceiros</h2>
            <p>
              A política de privacidade do Platforms List não se aplica a outros anunciantes ou websites. Assim, aconselhamos que consulte as respetivas políticas de privacidade destes servidores de publicidade de terceiros para informações mais detalhadas. Estas podem incluir as suas práticas e instruções sobre como desativar certas opções.
            </p>

            <h2 className="text-xl font-bold text-white uppercase mt-8">Consentimento</h2>
            <p>
              Ao utilizar o nosso website, consente com a nossa política de privacidade e concorda com os seus termos.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
