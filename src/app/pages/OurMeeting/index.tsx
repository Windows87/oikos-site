import DropdownSection from "@/app/components/DropdownSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";

const dropDownItems = [
    { label: "Como é o nosso Encontro?", content: "" },
    { label: "Para pais com crianças pequenas", content: "" },
    { label: "Como me vestir?", content: "" },
    { label: "Preciso levar algo?", content: "" }
]

export default function OurMeeting() {
    return (
        <>
        <MainBackground
            backgroundImage="https://i.imgur.com/CHtZTKQ.png"
            title="Nosso Culto"
            description="Venha nos visitar e conhecer mais sobre a Oikos!"
            firstButtonText="Como é"
            secondButtonText="Visitar"
            firstButtonLink="#como-ele-e"
            secondButtonLink="#visitar"
        />
        <TextSection
            id="como-ele-e"
            title="Como ele é?"
            textSize="28px"
            text="O domingo é o principal encontro da nossa comunidade, quando juntos adoramos a Jesus Cristo e nos encorajamos a crescer em nosso relacionamento com ele. Queremos te estimular a não só assistir o culto, mas participar ativamente desse tempo."
        />
        <DropdownSection
            title="Dúvidas Frequentes"
            list={dropDownItems}
        />
        <TextWithImageSection
            id="visitar"
            topTitle="Visitar"
            title="Av. Dr. Carlos Botelho, 2626 - Centro"
            text="Nosso culto é todo Domingo ás 18h com duração estimada de 1h30."
            imageSrc="https://i.imgur.com/KjpLLyq.png"
            firstButtonText="Google Maps"
            firstButtonLink="https://maps.app.goo.gl/uxkJyYisFoe8KiNr7"
        />
        <Footer />
        </>
    );
}