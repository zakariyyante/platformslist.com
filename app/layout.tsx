import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "AW-18359108026";

export const metadata: Metadata = {
  title: "Platforms List - Os Melhores Sites de Jogos em Portugal",
  description: "Aceda ao portal das melhores plataformas de jogos em Portugal. Avaliações de especialistas, bónus exclusivos e pagamentos rápidos.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="antialiased felt-texture">
        {/* Google Tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                'send_to': '${GA_MEASUREMENT_ID}/gecmCKbt--AcELqDp7JE',
                'value': 1.0,
                'currency': 'USD',
                'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}
