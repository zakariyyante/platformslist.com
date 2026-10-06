export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  pros?: string[];
}

export const brands: Brand[] = [
  {
    id: "nossa-aposta",
    name: "Nossa Aposta",
    logo: "/brands/nossaa.webp",
    rating: 9.9,
    bonus: "2000€ em Bónus",
    url: "https://www.nossaaposta.pt/",
    isMobile: false,
    votes: 2556,
    pros: ["Licença SRIJ", "Bónus Elevado", "Suporte 24/7"]
  },
  {
    id: "bwin-pt",
    name: "Bwin",
    logo: "/brands/bwin_dark.png",
    rating: 9.8,
    bonus: "100 Rodadas Grátis",
    url: "https://mediaserver.entainpartners.com/renderBanner.do?zoneId=2159106&tpdeh=",
    isMobile: false,
    votes: 2142,
    pros: ["App Mobile", "Odds Competitivas", "Cashout"]
  },
];
