import AboutUs from "../pages/AboutUs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Nós - Nossa História e Declaração de Fé",
  description: "Conheça a história da Comunidade Cristã Oikos em São Carlos. Nossa declaração de fé, valores cristãos e por que nascemos como igreja evangélica reformada.",
  keywords: [
    "sobre oikos são carlos",
    "história igreja oikos",
    "declaração de fé evangélica",
    "igreja reformada são carlos",
    "teologia cristã",
    "doutrina bíblica",
    "trindade",
    "salvação pela graça",
    "sola scriptura"
  ],
  openGraph: {
    title: "Sobre Nós - Comunidade Cristã Oikos São Carlos",
    description: "Conheça nossa história, declaração de fé e valores cristãos. Igreja evangélica reformada em São Carlos, SP.",
    url: "https://oikos-saocarlos.com.br/sobre-nos",
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br/sobre-nos",
  },
};

export default function SobreNosPage() {
    return <AboutUs />;
}