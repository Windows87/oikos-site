import ForCetics from "../pages/ForCetics";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Para Céticos - Exploração Intelectual da Fé Cristã",
  description: "Espaço para céticos, agnósticos e buscadores explorarem a fé cristã. Apologética, evidências históricas e diálogo respeitoso sobre cristianismo em São Carlos.",
  keywords: [
    "apologética cristã são carlos",
    "evidências cristianismo",
    "fé e razão",
    "ceticismo religioso",
    "investigação fé cristã",
    "diálogo inter-religioso",
    "provas históricas jesus",
    "filosofia cristã",
    "debate religioso",
    "buscadores espirituais"
  ],
  openGraph: {
    title: "Para Céticos - Comunidade Cristã Oikos São Carlos",
    description: "Explore a fé cristã de forma intelectual e respeitosa. Apologética, evidências e diálogo para céticos e buscadores em São Carlos, SP.",
    url: "https://oikos-saocarlos.com.br/para-ceticos",
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br/para-ceticos",
  },
};

export default function ParaCeticosPage() {
    return <ForCetics />;
}