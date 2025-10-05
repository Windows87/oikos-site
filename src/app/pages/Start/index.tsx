import EventsSection from "@/app/components/EventsSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";

export default function Home() {
  return (
    <>
      <MainBackground
        backgroundImage="https://i.imgur.com/fDu6KpV.png"
        title={`Olá! Nós\n somos a Oikos.`}
        description="Estamos felizes que você decidiu vir com a gente! Que tal nos conhecer mais?"
        firstButtonText="Conhecer"
        secondButtonText="Visitar"
        firstButtonLink="/sobre-nos"
        secondButtonLink="/nosso-culto"
      />
      <TextSection
        title="Somos a Oikos!"
        text="Nossa comunidade existe porque amamos São Carlos e acreditamos que o Evangelho é a boa notícia de Deus para todo ser humano, sem distinção."
        firstButtonText="Conhecer"
        secondButtonText="Visitar"
        firstButtonLink="/sobre-nos"
        secondButtonLink="/nosso-culto"
      />
      <EventsSection />
      <TextWithImageSection
        topTitle="Nossas Pregações"
        title="Assista a nossa última série de pregações"
        text="Todas elas são disponibilizadas semanalmente no Youtube e no Spotify!"
        imageSrc="https://i.imgur.com/oeT3XBF.png"
        firstButtonText="Assistir no Youtube"
        secondButtonText="Ouvir no Spotify"
        firstButtonLink="https://www.youtube.com/c/OikosS%C3%A3oCarlos"
        secondButtonLink="https://open.spotify.com/show/2UWoDr486AVhTdBT3XsMHZ"
      />
      <TextWithImageSection
        color='var(--darker-gray)'
        topTitle="Seja bem-vindo a nossa Igreja!"
        title="É novo na Fé?"
        text="Acreditamos que todos devem ouvir a palavra de Cristo e queremos que esteja confortável em nos conhecer."
        imageSrc="https://i.imgur.com/jOlOErh.png"
        firstButtonText="Para Céticos"
        secondButtonText="Como é o Culto"
        firstButtonLink="/para-ceticos"
        secondButtonLink="/nosso-culto"
        whiteText
      />
      <TextWithImageSection
        topTitle="Pequenos Grupos"
        title="Faça parte de um Pequeno Grupo"
        text="Ser Igreja é ser mais do que frequentar cultos. Se conecte com pequenos grupos para louvar a Deus."
        imageSrc="https://i.imgur.com/KjpLLyq.png"
        firstButtonText="Quero Participar"
        firstButtonLink="/pequenos-grupos"
      />
      <Footer />
    </>
  );
}
