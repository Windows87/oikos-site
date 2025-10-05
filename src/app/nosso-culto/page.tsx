import OurMeeting from "../pages/OurMeeting";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Nosso Culto - Horários e Como Participar",
  description: "Conheça nossos cultos dominicais na Comunidade Cristã Oikos. Horários, localização e como participar dos nossos encontros de adoração em São Carlos.",
  keywords: [
    "culto domingo são carlos",
    "horário culto oikos",
    "igreja domingo manhã",
    "adoração cristã são carlos",
    "pregação bíblica",
    "louvor contemporâneo",
    "visitantes igreja",
    "como ir igreja oikos"
  ],
  openGraph: {
    title: "Nosso Culto - Comunidade Cristã Oikos São Carlos",
    description: "Participe dos nossos cultos dominicais. Adoração, pregação bíblica e comunhão cristã em São Carlos, SP.",
    url: "https://oikos-saocarlos.com.br/nosso-culto",
  },
  alternates: {
    canonical: "https://oikos-saocarlos.com.br/nosso-culto",
  },
};

export default function NossoCultoPage() {
    return <OurMeeting />;
}