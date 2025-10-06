import MarriedLife from "../pages/MarriedLife";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Vida de Casado - Curso para Fortalecimento Conjugal",
  description: "Participe do curso Vida de Casado na Comunidade Cristã Oikos. Aprenda princípios bíblicos para fortalecer seu casamento e construir um relacionamento saudável e duradouro.",
  keywords: [
    "curso casamento cristão são carlos",
    "vida de casado oikos",
    "relacionamento conjugal",
    "princípios bíblicos casamento",
    "aconselhamento para casais",
    "casamento saudável",
    "relacionamento duradouro",
    "curso para noivos",
    "curso para casais"
  ],
  openGraph: {
    title: "Vida de Casado - Comunidade Cristã Oikos São Carlos",
    description: "Fortaleça seu casamento com nosso curso baseado em princípios bíblicos. Para noivos e casados em São Carlos, SP.",
    url: "https://oikos-saocarlos.com.br/vida-de-casado",
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br/vida-de-casado",
  },
};

export default function VidaDeCasadoPage() {
    return <MarriedLife />;
}