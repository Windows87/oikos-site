import SmallGroups from "../pages/SmallGroups";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pequenos Grupos - Comunhão e Crescimento Espiritual",
  description: "Faça parte de um pequeno grupo na Comunidade Cristã Oikos. Estudo bíblico, comunhão, oração e crescimento espiritual em grupos menores em São Carlos.",
  keywords: [
    "pequenos grupos igreja são carlos",
    "células igreja oikos",
    "estudo bíblico grupo",
    "comunhão cristã",
    "crescimento espiritual",
    "grupos de oração",
    "discipulado cristão",
    "ministério pequenos grupos"
  ],
  openGraph: {
    title: "Pequenos Grupos - Comunidade Cristã Oikos São Carlos",
    description: "Cresça espiritualmente em nossos pequenos grupos. Estudo bíblico, comunhão e discipulado cristão em São Carlos, SP.",
    url: "https://oikos-saocarlos.com.br/pequenos-grupos",
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br/pequenos-grupos",
  },
};

export default function PequenosGruposPage() {
    return <SmallGroups />;
}