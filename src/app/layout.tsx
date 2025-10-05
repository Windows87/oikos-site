import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Comunidade Cristã Oikos - Igreja Evangélica em São Carlos, SP",
    template: "%s | Comunidade Cristã Oikos"
  },
  description: "Comunidade Cristã Oikos em São Carlos - Uma casa para todos crescerem no relacionamento com Jesus. Cultos dominicais, pequenos grupos, eventos e cursos. Venha nos conhecer!",
  keywords: [
    "igreja evangélica são carlos",
    "comunidade cristã oikos",
    "igreja protestante são carlos",
    "culto domingo são carlos",
    "igreja reformada",
    "pequenos grupos igreja",
    "eventos cristãos são carlos",
    "pregação bíblica",
    "juventude cristã",
    "casais cristãos",
    "estudos bíblicos",
    "ministério jovens"
  ],
  authors: [{ name: "Comunidade Cristã Oikos", url: "https://oikos-saocarlos.com.br" }],
  creator: "Comunidade Cristã Oikos",
  publisher: "Comunidade Cristã Oikos",
  category: "Religion",
  classification: "Igreja Evangélica",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification", // Substituir pelo código real
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br",
  },
  openGraph: {
    title: "Comunidade Cristã Oikos - Igreja Evangélica em São Carlos, SP",
    description: "Uma casa para todos crescerem no relacionamento com Jesus. Cultos dominicais, pequenos grupos, eventos e cursos cristãos em São Carlos.",
    url: "https://oikos-saocarlos.com.br",
    siteName: "Comunidade Cristã Oikos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/S8yAKDY.png",
        width: 1200,
        height: 630,
        alt: "Logo Comunidade Cristã Oikos - Igreja Evangélica São Carlos",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comunidade Cristã Oikos - Igreja Evangélica São Carlos",
    description: "Uma casa para todos crescerem no relacionamento com Jesus. Venha nos conhecer!",
    images: ["https://i.imgur.com/S8yAKDY.png"],
    creator: "@oikos_saocarlos",
    site: "@oikos_saocarlos",
  },
  metadataBase: new URL("https://oikos-saocarlos.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Carlos" />
        <meta name="geo.position" content="-22.0174;-47.8908" />
        <meta name="ICBM" content="-22.0174, -47.8908" />
        <link rel="canonical" href="https://oikos-saocarlos.com.br" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={montserrat.variable}>
        {children}
      </body>
    </html>
  );
}
