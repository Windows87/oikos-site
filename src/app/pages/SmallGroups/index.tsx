import DropdownSection from "@/app/components/DropdownSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";

const dropDownItems = [
    { label: "Como funcionam os PGs?", content: "" },
    { label: "Tenho que levar alguma coisa?", content: "" },
    { label: "Por que participar?", content: "" }
]

export default function SmallGroups() {
    return (
        <>
        <MainBackground
            backgroundImage="https://i.imgur.com/0JLggs1.png"
            title="Pequenos Grupos"
            description="Se conecte com a Igreja"
            firstButtonText="O que é"
            secondButtonText="Encontrar"
            firstButtonLink="#o-que-e"
            secondButtonLink="#encontrar"
        />
        <TextSection
            id="o-que-e"
            title="O que são Pequenos Grupos?"
            textSize="28px"
            text="Reconhecemos que os pequenos grupos são excelentes oportunidades de comunhão, e damos graças a Deus por todos os irmãos e comunidades que já vivem assim. Mas também reconhecemos que há muitas pessoas – estudantes, profissionais e famílias diversas – que ainda não têm experimentado essa vivência cristã. É pensando nelas que formamos os pequenos grupos, com o desejo profundo de serem casas acolhedoras, onde todos possam crescer juntos em amizade, apoio mútuo e fé em Jesus."
        />
        <DropdownSection
            title="Dúvidas Frequentes"
            list={dropDownItems}
        />
        <TextWithImageSection
            id="encontrar"
            topTitle="Encontre sua Comunidade!"
            title="Encontre o seu PG Perfeito!"
            text="Entre em contato conosco para entendermos qual PG mais combina com você ;)"
            imageSrc="https://i.imgur.com/eaU6TXH.png"
            firstButtonText="Entrar em Contato"
            firstButtonLink="https://wa.me/558488008432?text=Ol%C3%A1!%20Tenho%20interesse%20em%20um%20PG."
        />
        <Footer />
        </>
    );
}