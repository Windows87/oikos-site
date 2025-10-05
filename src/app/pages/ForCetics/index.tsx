import DropdownSection from "@/app/components/DropdownSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";
import YoutubeVideoSection from "@/app/components/YoutubeVideoSection";

const dropDownItems = [
    { label: "Quem é Jesus?", content: "" },
    { label: "O que é a Bíblia?", content: "" },
    { label: "Quem é Deus?", content: "" },
    { label: "Por que a Igreja existe?", content: "" }
]

export default function ForCetics() {
    return (
        <>
        <MainBackground
            backgroundImage="https://i.imgur.com/ZdMzfsE.png"
            title="Para Céticos"
            description="Acreditamos que todos são bem vindos."
            firstButtonText="Conheça"
            secondButtonText="Dúvidas Frequentes"
            firstButtonLink="#conheca"
            secondButtonLink="#duvidas"
        />
        <YoutubeVideoSection
            id="conheca"
            title="Acreditamos que todos são bem vindos."
            videoUrl="https://www.youtube.com/embed/sfHlfaNGoUM?si=XQNEJcdyhLRA1hm9"
        />
        <DropdownSection
            id="duvidas"
            title="Dúvidas que você pode ter"
            list={dropDownItems}
        />
        <TextWithImageSection
            topTitle="Venha nos Conhecer"
            title="Venha nos Conhecer no Domingo!"
            text="Temos cultos todos os Domingos e esperamos você aqui ;)"
            imageSrc="https://i.imgur.com/KjpLLyq.png"
            firstButtonText="Visitar"
            firstButtonLink="/nosso-culto"
        />
        <Footer />
        </>
    );
}