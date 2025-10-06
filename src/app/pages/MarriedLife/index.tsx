import DropdownSection from "@/app/components/DropdownSection";
import Footer from "@/app/components/Footer";
import MainBackground from "@/app/components/MainBackground";
import TextSection from "@/app/components/TextSection";
import TextWithImageSection from "@/app/components/TextWithImageSection";

const dropDownItems = [
    { label: "O que é o curso Vida de Casado?", content: "O curso Vida de Casado é uma jornada de aprendizado para casais que desejam construir um relacionamento sólido baseado em princípios cristãos. Durante os encontros, abordamos temas essenciais como comunicação efetiva, resolução de conflitos, finanças no casamento, intimidade e espiritualidade conjugal." },
    { label: "Quem pode participar?", content: "O curso é aberto para casais em qualquer fase do relacionamento: noivos, recém-casados ou casados há muitos anos. Todos são bem-vindos, independentemente de sua experiência ou tempo de relacionamento." },
    { label: "Preciso ser membro da igreja?", content: "Não! O curso é aberto para todos os casais, sejam membros ou não da nossa comunidade. Valorizamos a diversidade e acreditamos que todos podem se beneficiar dos princípios bíblicos para o casamento." },
    { label: "Como funciona a dinâmica dos encontros?", content: "Os encontros combinam momentos de ensino, discussões em grupo, atividades práticas para os casais e oportunidades para perguntas e compartilhamento de experiências, sempre em um ambiente acolhedor e respeitoso." }
]

export default function MarriedLife() {
    return (
        <>
        <MainBackground
            backgroundImage="https://storage.googleapis.com/media_files_prod/uploads/inchurch/1038635/image-abd2ff8c4e29ac4871f97a3f9fa7b90a.jpg"
            title="Vida de Casado"
            description="Um curso para fortalecer seu relacionamento conjugal"
            firstButtonText="Sobre o Curso"
            secondButtonText="Participar"
            firstButtonLink="#sobre-o-curso"
            secondButtonLink="#participar"
        />
        <TextSection
            id="sobre-o-curso"
            title="Sobre o Curso Vida de Casado"
            textSize="28px"
            text="O curso Vida de Casado foi desenvolvido para ajudar casais a construírem relacionamentos saudáveis e duradouros baseados em princípios bíblicos. Acreditamos que o casamento é uma bênção de Deus e que, quando vivido conforme Seus desígnios, pode ser uma fonte de alegria, crescimento e realização para ambos os cônjuges. Nosso objetivo é equipar casais com ferramentas práticas e conhecimentos fundamentais para navegarem juntos pelos desafios e celebrarem as alegrias da vida matrimonial."
        />
        <DropdownSection
            title="Perguntas Frequentes"
            list={dropDownItems}
        />
        <TextWithImageSection
            id="participar"
            topTitle="Fortaleça seu Casamento"
            title="Inscreva-se no Próximo Curso"
            text="Se inscreva abaixo para se inscrever no próximo curso Vida de Casado. As vagas são limitadas, então não perca essa oportunidade de investir no seu relacionamento!"
            imageSrc="https://storage.googleapis.com/media_files_prod/uploads/inchurch/1038635/image-abd2ff8c4e29ac4871f97a3f9fa7b90a.jpg"
            firstButtonText="Inscrever-se"
            firstButtonLink="https://oikossaocarlos.org/eventos/1038635/vida-de-casado"
        />
        <Footer />
        </>
    );
}